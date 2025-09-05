import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import AddSubscription from "./pages/AddSubscription";
import Navbar from "./components/Navbar";

function App(){

    return(
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Dashboard /> } />
                    <Route path="/add" element={ <AddSubscription /> } />
                    <Route path="/setting" element={ <Setting /> } />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default App;