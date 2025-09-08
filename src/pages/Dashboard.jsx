import { getSubscriptions, deleteSubscription } from "../utils/localStorageHelper";
import { useEffect, useState } from "react";

function Dashboard({}){

    const[subscriptions, setSubscriptions] = useState([]);
    

   useEffect(() => {
   const sub = getSubscriptions();
   setSubscriptions(sub);
   }, []);

   const handleDelete = (id) =>{
    const updated = deleteSubscription(id);
    setSubscriptions(updated);
   }

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
                {subscriptions.length > 0 ?
                   subscriptions.map((sub, index) => (
                      
                    <li key={index}>
                        {sub.name} - ${sub.price} (Renewal: {sub.nextRenewal}) {sub.notes} {sub.category} {sub.billingCycle}
                        <button onClick={() => handleDelete(sub.id, sub.price)
                        }>Delete</button>
                    </li>

                    )) : (
                    <p>No subscription found</p>
                )}
            </div>
        </div>
    )
}

export default Dashboard;