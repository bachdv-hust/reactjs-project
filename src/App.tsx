import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddPetScreen from './screen/add-pet/AddPetScreen'
import HomeScreen from './screen/home/HomeScreen'
import LoginScreen from './screen/login/LoginScreen'
import PetDetail from './screen/pet-detail/PetDetail'
import TestScreen from './screen/test-screen/TestScreen'
import NotFoundScreen from './screen/not-found/NotFoundScreen'
import {Toaster} from 'react-hot-toast'
import PersonalInfo from './screen/personal-info/PersonalInfo'
import PetMessengerScreen from './screen/messenger/PetMessengerScreen'
import {BaseFullScreen, BaseMobileScreen} from './screen/basescreen/BaseAppScreen'
import React, {useEffect, useState} from 'react'
import User from './models/User'
import {ChatEngineWrapper} from 'react-chat-engine'
import AppApi from "./api/AppApi";
import Logger from "./api/Logger";
import LoadingScreen from "./screen/util/LoadingScreen";
import ChatClientApi from "./api/ChatClientApi";

interface UserContextInterface {
	currentUser: User | undefined
	setCurrentUser: (user: User | undefined) => void
}

interface ThemeContextInterface {
	theme: 'dark' | 'light'
	setTheme: (theme: 'dark' | 'light') => void
}

interface LoadingState {
	isLoading: boolean,
	setLoading: (isLoading: boolean) => void
}

interface AppContextInterface extends UserContextInterface, ThemeContextInterface, LoadingState {
	// shared context
	appApi: AppApi
	chatApi: ChatClientApi
}

const defaultContext: AppContextInterface = {
	currentUser: undefined,
	setCurrentUser: () => {
	},

	theme: 'light',
	setTheme: () => {
	},

	appApi: new AppApi(),
	chatApi: new ChatClientApi(),

	isLoading: false,
	setLoading: (() => {
	})
}

export const AppCtx = React.createContext<AppContextInterface>(defaultContext)

export function App() {
	let currentUser: User | undefined
	let userJson = localStorage.getItem('user')
	if (userJson) {
		try {
			currentUser = JSON.parse(userJson)
		} catch (error) {
			Logger.error(error)
			currentUser = undefined
		}
	} else {
		currentUser = undefined
	}

	let [user, setUser] = useState(currentUser)
	let [isLoading, setLoading] = useState(false)

	defaultContext.currentUser = user
	defaultContext.setCurrentUser = (user: User | undefined) => {
		console.log('set user')
		if (user) {
			// login
			localStorage.setItem('user', JSON.stringify(user))
		} else {
			// logout
			localStorage.setItem('user', '')
			defaultContext.appApi.setToken('')
		}
		setUser(user)
	}

	defaultContext.isLoading = isLoading
	defaultContext.setLoading = (isLoading: boolean) => {
		setLoading(isLoading)
	}

	useEffect(() => {
		let controller = new AbortController()

		const refreshToken = async () => {
			if(!currentUser) {
				return
			}

			try {
				let res = await defaultContext.appApi.refreshToken(currentUser.email, currentUser.pwd, controller)
				if(res.data.statusCode === 200) {
					defaultContext.appApi.setToken(res.data.data.token)
				} else {
					//
				}
			} catch (e) {
				Logger.error(e)
			}
		}

		refreshToken().then(() => {
			Logger.log("refresh token done")
		})
		return () => {
			controller.abort()
		}

	}, [])

	return (
		<AppCtx.Provider value={defaultContext}>
			<ChatEngineWrapper>
				<div>
					<Router>
						<Routes>
							<Route path="/" element={<BaseMobileScreen>
								<HomeScreen/>
							</BaseMobileScreen>}/>


							<Route path="/login" element={<LoginScreen/>}/>

							<Route path="/personal" element={<PersonalInfo/>}/>


							<Route path="/add-pet" element={
								<BaseMobileScreen>
									<AddPetScreen/>
								</BaseMobileScreen>}/>

							<Route path="/pet-detail/:petId" element={
								<BaseMobileScreen>
									<PetDetail/>
								</BaseMobileScreen>}/>

							<Route path="/messenger" element={<BaseFullScreen>
								<PetMessengerScreen/>
							</BaseFullScreen>}/>

							<Route path="/test" element={<TestScreen/>}/>

							{/* ! Not found route, alway in the end, do not change order */}
							<Route path="*" element={<NotFoundScreen/>}/>
						</Routes>
					</Router>

					<Toaster/>

					<LoadingScreen isLoading={isLoading}/>
				</div>
			</ChatEngineWrapper>
		</AppCtx.Provider>
	)
}
