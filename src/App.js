import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddPetScreen from './screen/add-pet/AddPetScreen'
import DiscoveryScreen from './screen/community/DiscoveryScreen'
import HomeScreen from './screen/home/HomeScreen'
import LoginScreen from './screen/login/LoginScreen'
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/home" element={<HomeScreen/>} />
                <Route path="/community" element={<DiscoveryScreen/>} />
                <Route path="/add-pet" element={<AddPetScreen/>} />
            </Routes>
        </Router>
    )
}