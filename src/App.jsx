import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import AddSubscription from "./pages/AddSubscription";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(){

    return(
        <div>
            
            <BrowserRouter>

                <Navbar />

                <Routes>
                    <Route path="/" element={ <Dashboard /> } />
                    <Route path="/add" element={ <AddSubscription /> } />
                    <Route path="/setting" element={ <Setting /> } />
                </Routes>

                <Footer />
            </BrowserRouter>
            
        </div>
    )
}
export default App;