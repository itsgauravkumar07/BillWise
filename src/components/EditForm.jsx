import { useState } from "react";

function EditForm({ subscription, onClose, onSave }){

    const[name, setName] = useState(subscription.name || "");
    const[price, setPrice] = useState(subscription.price || 0);
    const[renewalDate, setRenewalDate] = useState(subscription.nextRenewal || "");
    const[billCycle, setBillCycle] = useState(subscription.billingCycle || "");
    const[note, setNote] = useState(subscription.notes || "");

    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} />
                <select name="billing Cycle" value={billCycle} onChange={(e) => setBillCycle(e.target.value)} >
                    
                    <option value="Monthly" >Monthly</option>
                    <option value="Yearly" >Yearly</option>

                </select>

                <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
            </form>

            <button 
                onClick={() => {
                    onSave({
                    ...subscription, 
                    name, 
                    price: Number(price), 
                    nextRenewal: renewalDate, 
                    billingCycle: billCycle, 
                    notes: note
                });

                onClose();

                }}
            >
                Save
                
            </button>
        </div>
    )
}
export default EditForm;