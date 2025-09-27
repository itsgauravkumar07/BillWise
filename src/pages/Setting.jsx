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

                        <div className="flex flex-col gap-4 border-1 border-gray-300 bg-white px-6 py-6 rounded-2xl mt-5">
                            
                            <h1 className="text-lg font-bold text-gray-800">About</h1>
                            <p className="text-sm text-gray-900">Billwise helps you take control of your recurring expenses. Track every subscription, get renewal reminders, and stay within budget — all in one simple dashboard. No more wasted money. No more surprises. Just smarter subscription management.</p>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;