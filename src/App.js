import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddPetScreen from './screen/add-pet/AddPetScreen'
import DiscoveryScreen from './screen/community/DiscoveryScreen'
import MessengerScreen from './screen/messenger/MessengerScreen'
import HomeScreen from './screen/home/HomeScreen'
import LoginScreen from './screen/login/LoginScreen'
import PetDetail from './screen/pet-detail/PetDetail'
import TestScreen from './screen/test-screen/TestScreen'
import NotFoundScreen from './screen/not-found/NotFoundScreen'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/home" element={<HomeScreen/>} />
                <Route path="/community" element={<DiscoveryScreen/>} />
                <Route path="/add-pet" element={<AddPetScreen/>} />
                <Route path="/pet-detail/:petId" element={<PetDetail />}/>
                <Route path="/test" element={<TestScreen/>} />
                <Route path="/message" element={<MessengerScreen/>} />

                {/* ! Not found route, alway in the end, do not change order */}
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Router>
    )
}