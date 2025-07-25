// styles
import './styles/App.css'

// external libs imports
import {BrowserRouter, Routes, Route} from "react-router"

// views
import DesktopHomeView from "@pages/Desktop/DesktopHomeView/DesktopHomeView";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DesktopHomeView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
