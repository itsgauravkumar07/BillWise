import { getSubscriptions, deleteSubscription, updateSubscription } from "../utils/localStorageHelper";
import { useEffect, useState } from "react";
import Modal from "../components/Model";
import EditForm from "../components/EditForm";


function Dashboard({}){

    const[subscriptions, setSubscriptions] = useState([]);
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[selectedSub, SetSelectedSub] = useState(null);

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

   const totalBill = subscriptions.reduce((acc, sub) => {
    if(sub.billingCycle === "Monthly"){
        return acc + sub.price;
    } else if(sub.billingCycle === "Yearly"){
        return acc + sub.price / 12;
    }
    return acc;
   }, 0);

    return(
        <div>
            <h1>All your subscriptions</h1>
            <div>
                <h1>Total monthly bill ${totalBill.toFixed(2)} </h1>

                {subscriptions.length > 0 ? subscriptions
                    .filter((sub) => sub && sub.id)
                    .map((sub) => (
                      
                    <li key={sub.id}>
                        {sub.name} - ${sub.price} (Renewal: {sub.nextRenewal}) {sub.notes} {sub.category} {sub.billingCycle}
                        <button onClick={() => handleEdit(sub)}>Edit</button>
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