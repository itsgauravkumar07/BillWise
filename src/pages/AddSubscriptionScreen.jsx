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

    const[error, setError] = useState({
        name: "",
        price: "",
        renewalDate: "",
        billCycle: "",
        category: ""
    });
   
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // const showError = ({

        // name: "Name can't be empyt",
        // price: "Enter valid price",
        // renewalDate: "Enter valid renewal date",
        // billCycle: "Enter valid bill cycle",
        // category: "Enter valid category"
        
        // });


        if(!name.trim()){
            setError(prev => ({...prev, name: "Name can't be empyt"}));
            return;
        }

        if(!price || price <= 0){
           setError(prev => ({...prev, price: "Enter valid price"}));
            return;
        }
        
        if(!renewalDate){
            setError(prev => ({...prev, renewalDate: "Enter valid renewal date"}));
            return;
        } 
        
        if(!category){
            setError(prev => ({...prev, category: "Enter valid category"}));
        }

        if(!billCycle){
            setError(prev => ({...prev, billCycle: "Enter valid bill cycle"}));
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
        setError("");

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
                
                {/* handline and desc section */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Subscription</h1>
                    <p className="text-base text-gray-500 mt-1 mb-6">Enter the details below to track your new subscription</p>
                </div>

                <form name="addSubscriptionForm" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">

                    {/* Subscription name */}
                    <div className="flex flex-col gap-2.5">
                        <label className="text-base font-semibold text-gray-800">Subscription Name </label>
                        <input type="text" placeholder="e.g, Netfilx, Spotify" value={name} onChange={(e) => setName(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5"/>  
                         {error && <div>{error.name}</div>}
                    </div>
                    
                    
                    <div className="flex flex-col md:flex-row lg:flex-row gap-4">

                        {/* Price input */}
                        <div className="flex flex-col gap-2.5 w-full mt-5">
                            <label className="text-base font-semibold text-gray-800">Price</label>
                            <input type="number" placeholder="$ 10.78" value={price} onChange={(e) => setPrice(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5"/>
                            {error && <div>{error.price}</div>}
                        </div>

                        {/* Renewal Date section */}
                        <div className="flex flex-col gap-2.5 w-full mt-5 justify-end">
                            <label className="text-base font-semibold text-gray-800">Renewal Date </label>
                            <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} className="w-full rounded-lg border-gray-500 border-1 px-2 py-1.5"  />  
                            {error && <div>{error.renewalDate}</div>}
                        </div> 
                    </div>


                    <div className="flex flex-col md:flex-row lg:flex-row gap-4">

                        {/* Category section */}
                        <div className="flex flex-col gap-2.5 mt-5 w-full">
                            <label className="text-base font-semibold text-gray-800">Category</label>
                            <input type="text" placeholder="e.g, Entertainment..." value={category} onChange={(e) => setCategory(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5" />
                             {error && <div>{error.category}</div>}
                        </div>
                        
                        {/* Billing cycle section  */}
                        <div className="flex flex-col gap-2.5 mt-5 w-full">
                            <label className="text-base font-semibold text-gray-800">Billing cycle</label>
                            <select name = "BillCycle" value={billCycle} onChange={(e) => setBillCycle(e.target.value)} className="rounded-lg border-gray-500 border-1 px-2 py-1.5">
                                
                                <option value="Monthly" >Monthly</option>
                                <option value="Yearly" >Yearly</option>

                            </select>
                             {error && <div>{error.billCycle}</div>}
                        </div>
                    
                    </div>

                    {/* Add subscription Button */}
                    <button type="submit" className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold mt-7 hover:bg-indigo-700 hover:shadow-md">Add Subscription</button>
                </form>

                {/* Cancel button */}
                <button className="w-full rounded-lg bg-white px-4 py-2 mb-4 text-gray-800 font-semibold mt-4 border-1 border-gray-300 hover:shadow-sm" onClick={() => navigate("/")}>Cancel</button>
            </div>
        </div>
    )
}

export default AddSubscriptionScreen;