import { getSubscriptions, deleteSubscription } from "../utils/localStorageHelper";
import { useEffect, useState } from "react";

function Dashboard(){

    const[subscriptions, setSubscriptions] = useState([]);

   useEffect(() => {
   const sub = getSubscriptions();
   setSubscriptions(sub);
   }, []);

   const handleDelete = (id) =>{
    const updated = deleteSubscription(id);
    setSubscriptions(updated);
   }

    return(
        <div>
            <h1>All your subscriptions</h1>
            <div>
                {subscriptions.length > 0 ?
                   subscriptions.map((sub, index) => (
                      
                    <li key={index}>
                        {sub.name} - ${sub.price} (Renewal: {sub.nextRenewal}) {sub.notes} {sub.category} {sub.billingCycle}
                        <button onClick={() => handleDelete(sub.id)
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