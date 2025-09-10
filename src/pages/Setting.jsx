import { useState } from "react";
import { saveDarkMode, savedDarkMode, saveRenewalToggleState, savedRenewalToggleState, saveCurrency, savedCurrency } from "../utils/localStorageHelper";

function Setting(){

    const[darkMode, setDarkMode] = useState(savedDarkMode());
    const[renewalToggle, setRenewalToggle] = useState(savedRenewalToggleState())
    const[currency, setCurrency] = useState(savedCurrency())

    function handleDarkMode(){
       const newDarkMode = !darkMode;
       setDarkMode(newDarkMode);
       saveDarkMode(newDarkMode);
    }

    function handleRenewalToggle(){
        const newRenewalToggle = !renewalToggle;
        setRenewalToggle(newRenewalToggle);
        saveRenewalToggleState(newRenewalToggle);
    }

    function handleChangeCurrency(e){
        const newCurrency = e.target.value;
        setCurrency(newCurrency);
        saveCurrency(newCurrency);
    }

    return(
        <div>

           {/* currency selector */}
           <span>Currency</span>
           <select name="CurrencySelector" value={currency} onChange={handleChangeCurrency}>
            <option value="">Currency preference</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
           </select>

            {/* Dark mode toggle */}
            <div className="flex">
                <span className="mr-2">Dark mode</span>
                <div className={ `w-12 h-6 rounded-full p-1 flex ${
                    darkMode ? "bg-green-500" : "bg-gray-300"
                }`} >
                    <button
                        onClick={handleDarkMode} 
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                            darkMode ? "translate-x-6" : "translate-x-0"
                        }`}
                    >

                    </button>
                </div>

            </div>
            
            {/* Renewal Toggle */}
             <div className="flex">
                <span className="mr-2">Renewal Reminder</span>
                <div className={ `w-12 h-6 rounded-full p-1 flex ${
                    renewalToggle ? "bg-green-500" : "bg-gray-300"
                }`} >
                    <button
                        onClick={handleRenewalToggle} 
                        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                            renewalToggle ? "translate-x-6" : "translate-x-0"
                        }`}
                    ></button>
                </div>

            </div>
            
        </div>
    )
}

export default Setting;