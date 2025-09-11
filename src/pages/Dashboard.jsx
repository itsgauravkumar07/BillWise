import { getSubscriptions, deleteSubscription, updateSubscription, savedCurrency} from "../utils/localStorageHelper";
import { useEffect, useState } from "react";
import Modal from "../components/Model";
import EditForm from "../components/EditForm";

function Dashboard({}){

    const[subscriptions, setSubscriptions] = useState([]);
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[selectedSub, SetSelectedSub] = useState(null);
    const[currency, setCurrency] = useState(savedCurrency());

   useEffect(() => {
   const sub = getSubscriptions().filter(s => s && s.id && s.name);
   setSubscriptions(sub);
   }, []);

   const handleDelete = (id) =>{
    const updated = deleteSubscription(id);
    setSubscriptions(updated);
   }

   const handleEdit = (subscription) => {
    setIsModalOpen(true);
    SetSelectedSub(subscription);
   }

   const handleSave = (updatedSub) => {
        const updateList = updateSubscription(updatedSub);
        setSubscriptions(updateList);
        setIsModalOpen(false);
        SetSelectedSub(null);
   };

   const totalMonthlyBill = subscriptions.reduce((acc, sub) => {
    if(sub.billingCycle === "Monthly"){
        return acc + sub.price;
    } else if(sub.billingCycle === "Yearly"){
        return acc + sub.price / 12;
    }
    return acc;
   }, 0);

   const totalYearlyBill = subscriptions.reduce((acc, sub) => {
    return acc + sub.price * 12;
   }, 0)

    return(
        <div>
            <div className="text-center mt-20 mb-20">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">Your Subscriptions Dashboard</h1>
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mt-2">Keep track of all your susbcriptions in one beautiful, organized place</p>
            </div>
            
            <div className="flex flex-col md:flex-row lg:flex-row justify-between">
                <div className="bg-amber-200 h-40 rounded-2xl p-6 ">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-base text-gray-500">Active Subscriptions</p>
                        <p className="bg-gray-500 p-2 rounded-md">{currency}</p>
                    </div>
                    
                    <p>{subscriptions.length}</p>
                </div>
                
                <h1>Total monthly bill {currency}{totalMonthlyBill.toFixed(2)} </h1>
                <h1>Total Yearly bill {currency}{totalYearlyBill}</h1>
            </div>

            <div>
                {subscriptions.length > 0 ? subscriptions
                    .filter((sub) => sub && sub.id)
                    .map((sub) => (
                      
                    <li key={sub.id}>
                        {sub.name} -{currency} {sub.price} (Renewal: {sub.nextRenewal}) {sub.notes} {sub.category} {sub.billingCycle}
                        <button onClick={() => handleEdit(sub)} className="bg-indigo-500">Edit</button>
                        <button onClick={() => handleDelete(sub.id)}>Delete</button>
                    </li> 
                    )) : ( <p>No subscription found</p> )}

            </div>

                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {selectedSub && (
                        <EditForm 
                            subscription={selectedSub}
                            onClose={() => setIsModalOpen(false)}
                            onSave={handleSave}
                        />
                    )}
                </Modal>

        </div>
    )
}

export default Dashboard;