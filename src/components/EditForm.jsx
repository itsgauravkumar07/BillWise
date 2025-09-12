import { useState } from "react";

function EditForm({ subscription, onClose, onSave }){

    const[name, setName] = useState(subscription.name || "");
    const[price, setPrice] = useState(subscription.price || 0);
    const[renewalDate, setRenewalDate] = useState(subscription.nextRenewal || "");
    const[billCycle, setBillCycle] = useState(subscription.billingCycle || "");
    const[category, setCategory] = useState(subscription.category || "");

    return(
        <div className="flex-grow flex items-center justify-center">

            <div className="bg-white rounded-2xl w-fit px-10 py-6 flex flex-col">
                
                {/* handline and desc section */}
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold text-gray-800">Add New Subscription</h1>
                    <p className="text-base text-gray-500 mt-1 mb-2">Enter the details below to track your new subscription</p>
                </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col justify-start">



                     {/* Subscription name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-base font-semibold text-gray-800">Subscription Name </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5"/>  
                    </div>
                    
                    
                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">

                        {/* Price input */}
                        <div className="flex flex-col gap-1 w-full mt-2">
                            <label className="text-base font-semibold text-gray-800">Price</label>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5"/>
                        </div>

                        {/* Renewal Date section */}
                        <div className="flex flex-col gap-1 w-full mt-2 justify-end">
                            <label className="text-base font-semibold text-gray-800">Renewal Date </label>
                             <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} className="w-full rounded-lg border-gray-500 border-1 px-2 py-1.5"  />  
                        </div> 
                    </div>


                    <div className="flex flex-col md:flex-row lg:flex-row gap-2">

                        {/* Category section */}
                        <div className="flex flex-col gap-1 mt-2 w-full">
                            <label className="text-base font-semibold text-gray-800">Category</label>
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="border-gray-500 border-1 rounded-lg px-2 py-1.5" />
                        </div>
                        
                        {/* Billing cycle section  */}
                        <div className="flex flex-col gap-1 mt-2 w-full">
                            <label className="text-base font-semibold text-gray-800">Billing cycle</label>
                            <select name = "BillCycle" value={billCycle} onChange={(e) => setBillCycle(e.target.value)} className="rounded-lg border-gray-500 border-1 px-2 py-1.5">
                                
                                <option value="Monthly" >Monthly</option>
                                <option value="Yearly" >Yearly</option>

                            </select>
                        </div>
                    </div>

                </form>

                <button 
                    onClick={() => {
                        onSave({
                        ...subscription, 
                        name, 
                        price: Number(price), 
                        nextRenewal: renewalDate, 
                        billingCycle: billCycle, 
                        category
                    });
                        onClose();
                }}
                 className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold mt-7 hover:bg-indigo-700 hover:shadow-md"
                >Save</button>
            </div>
        </div>
    )
}
export default EditForm;