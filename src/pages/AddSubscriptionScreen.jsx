import { useState } from "react"
import { addSubscription } from "../utils/localStorageHelper";

const AddSubscriptionScreen = () => {

    const[name, setName] = useState("");
    const[price, setPrice] = useState("");
    const[billCycle, setBillCycle] = useState("");
    const[renewalDate, setRenewalDate] = useState("");
    const[category, setCategory] = useState("");
    const[note, setNote] = useState("");

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
        notes: note.trim(),
        createdAt: new Date().toISOString()   
    }

        addSubscription(subscription);
        alert("Subscription Added successfully!!");

        setName("");
        setPrice("");
        setBillCycle("");
        setRenewalDate("");
        setCategory("");
        setNote("");
    }

    return (
        <div>
            <form name="addSubscriptionForm" onSubmit={handleSubmit}>

                <label>Name: </label>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                
                <label>Price: </label>
                <input type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                
                <label>Billing cycle(montly/yearly): </label>
                <select name = "BillCycle" value={billCycle} onChange={(e) => setBillCycle(e.target.value)}>

                    <option value="">Please choose an option</option>
                    <option value="Monthly" >Monthly</option>
                    <option value="Yearly" >Yearly</option>

                </select>
                

                <label>Next renewal date: </label>
                <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)} />

                <label>Category: </label>
                <input type="text" placeholder="Enter Category" value={category} onChange={(e) => setCategory(e.target.value)} />

                <label>Notes: </label>
                <input type="text" placeholder="Enter Any Note" value={note} onChange={(e) => setNote(e.target.value)} />

                <button type="submit">Add Subscription</button>
            </form>
        </div>
    )
}

export default AddSubscriptionScreen;