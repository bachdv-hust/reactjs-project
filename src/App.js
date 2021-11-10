import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screen/home/HomeScreen'
import LoginScreen from './screen/login/LoginScreen'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/home" element={<HomeScreen/>} />
            </Routes>
        </Router>
    )
}