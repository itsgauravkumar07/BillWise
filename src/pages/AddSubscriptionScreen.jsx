import { useState } from "react"
import { addSubscription } from "../utils/localStorageHelper";
import Dashboard from "./Dashboard"
import { useNavigate } from "react-router-dom";


const AddSubscriptionScreen = () => {

    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[billCycle, setBillCycle] = useState("");
    const[renewalDate, setRenewalDate] = useState("");
    const[category, setCategory] = useState("");
   
   

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!price || price <= 0){
            alert("Please enter Valid price");
            return;
        }
        
        if(!renewalDate){
            alert("Please enter date correctly");
            return;
        } 
        
        if(!billCycle){
            alert("Please enter Valid Billing cycle");
            return;
        }

        if(!name.trim()) {
            alert("please enter a name");
            return;
        }

        const subscription = {

        id: Date.now().toString(),
        name: name,
        price: Number(price),
        currency: "INR",
        billingCycle: billCycle,
        nextRenewal: renewalDate,
        category: category.trim(),
        createdAt: new Date().toISOString()   
    }

        addSubscription(subscription);
        alert("Subscription Added successfully!!");

        setName("");
        setPrice("");
        setBillCycle("");
        setRenewalDate("");
        setCategory("");
      
    }

    return (
        <div className="flex-grow p-10 flex items-center justify-center">
            
            <div className="bg-white rounded-2xl w-fit px-10 pt-10 pb-6 flex flex-col shadow-lg">
                
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Subscription</h1>
                    <p className="text-base text-gray-500 mt-1 mb-6">Enter the details below to track your new subscription</p>
                </div>

                <form name="addSubscriptionForm" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">

                    <div className="flex flex-col gap-1.5">
                        <label className="text-base font-semibold text-gray-800">Subscription Name </label>
                        <input type="text" placeholder="e.g, Netfilx, Spotify" value={name} onChange={(e) => setName(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5"/>  
                    </div>
                    
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                        <div className="flex flex-col gap-1.5 w-full mt-3">
                            <label className="text-base font-semibold text-gray-800">Price</label>
                            <input type="number" placeholder="$ 10.78" value={price} onChange={(e) => setPrice(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5"/>
                        </div>
                        
                        <div className="flex flex-col gap-1.5 w-full mt-3 justify-end">
                            <label className="text-base font-semibold text-gray-800">Renewal Date </label>
                            <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} className="w-full rounded-lg border-gray-500 border-1 px-2 py-1.5"  />  
                        </div> 
                        
                        
                    </div>

                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">
                        <div className="flex flex-col gap-1.5 mt-3 w-full">
                            <label className="text-base font-semibold text-gray-800">Category</label>
                            <input type="text" placeholder="e.g, Entertainment..." value={category} onChange={(e) => setCategory(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5" />
                        </div>

                        <div className="flex flex-col gap-1.5 mt-3 w-full">
                            <label className="text-base font-semibold text-gray-800">Billing cycle</label>
                            <select name = "BillCycle" value={billCycle} onChange={(e) => setBillCycle(e.target.value)} className="rounded-lg border-gray-500 border-1 px-2 py-1.5">
                                
                                <option value="Monthly" className="rounded-2xl">Monthly</option>
                                <option value="Yearly" >Yearly</option>

                            </select>
                        </div>
                    
                    </div>

                    <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold mt-5 hover:bg-indigo-700 hover:shadow-md">Add Subscription</button>
                    
                </form>
                
            </div>
        </div>
    )
}

export default AddSubscriptionScreen;