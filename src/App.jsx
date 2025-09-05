import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import AddSubscription from "./pages/AddSubscription";

function App(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Dashboard /> } />
                    <Route path="/addsubscription" element={ <AddSubscription /> } />
                    <Route path="/setting" element={ <Setting /> } />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}
export default App;