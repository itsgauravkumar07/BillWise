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
        <div className="flex-grow px-10">

        <div className="flex flex-col justify-center items-center">
                
           <div className="flex flex-col justify-center w-full md:w-2xl lg:w-2xl px-5 py-5">
           
                <div className="flex justify-start flex-row items-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900  px-5 mt-5 mb-6">Setting</h1>
                </div>
            
            {/* currency selector */}
            <div className="flex flex-col gap-4 border-1 border-gray-300 bg-white px-6 py-6 rounded-2xl">
                <p className="text-lg font-bold text-gray-800">Preference</p>

                <div className="flex flex-row justify-between ">
                    <span className="text-base font-bold text-gray-800">Currency</span>        
                 <select name="CurrencySelector" value={currency} onChange={handleChangeCurrency} className="rounded-lg border-gray-500 border-1 px-2 py-1.5" >
                
                    <option value="₹">INR</option>
                    <option value="$">USD</option>
                    <option value="€">EUR</option>
                 </select>
               </div>
               
            </div>
           

            {/* Dark mode toggle */}
            
                <div className="flex flex-col gap-4 border-1 border-gray-300 bg-white px-6 py-6 rounded-2xl mt-6">
                    <span className="text-lg font-bold text-gray-800">Appearance</span>
                    
                    <div className="flex flex-row justify-between">

                        <span className="text-base font-bold text-gray-800">Dark mode</span>

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
                    
                </div>
           
            
            {/* Renewal Toggle */}
            <div className="flex flex-col gap-4 border-1 border-gray-300 bg-white px-6 py-6 rounded-2xl mt-6">
                <span className="text-lg font-bold text-gray-800">Appearance</span>
                
                <div className="flex flex-row justify-between">
                <span className="text-base font-bold text-gray-800">Renewal Remindes</span>
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
            
        
            </div>
            </div>
            
        </div>
    )
}

export default Setting;