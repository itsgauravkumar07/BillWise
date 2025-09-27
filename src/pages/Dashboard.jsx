import { getSubscriptions, deleteSubscription, updateSubscription, savedCurrency} from "../utils/localStorageHelper";
import { useEffect, useState } from "react";
import Modal from "../components/Model";
import EditForm from "../components/EditForm";
import subicon from '../assets/subscription.png'
import wallet from '../assets/wallet.png';
import deleteicon from '../assets/delete.png';
import edit from '../assets/edit.png'
import oops from '../assets/oops.png'
import stats from'../assets/stats.png'
import booking from '../assets/booking.png'

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
        <div className="flex-grow px-10">
            <div className="text-center py-20 bg-white rounded-2xl shadow-md my-4">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800">Your Subscriptions Dashboard</h1>
                <p className="font-medium text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mt-2">Keep track of all your susbcriptions in one beautiful, organized place</p>
            </div>
            
             <div className="flex flex-row gap-2 items-center-safe mt-12 mb-4">
                <img src={stats} alt="" className="h-6 w-6"/>
                <h1 className="text-2xl font-semibold text-gray-800">Financial Overview</h1>
            </div>
            {/* All Summary card */}
            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4">
                
                {/* Card 01 */}
                <div className="bg-blue-50 w-full h-44 rounded-2xl p-6 flex flex-col shadow-sm mt-8 md:mt-3 lg:mt-3 border-1 border-gray-400">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-base text-gray-500">Monthly Total</p>
                        <div className="flex items-center justify-center h-8 w-8 bg-white border-1 border-gray-300 text-center rounded-lg">
                            <p className="text-lg font-medium">{currency}</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <p className="text-2xl font-bold text-gray-800">{currency}{totalMonthlyBill.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">Per month spending</p>
                    </div>
                </div>


                 {/* Card 02 */}
                <div className="bg-fuchsia-50 w-full h-44 rounded-2xl p-6 flex flex-col shadow-sm mt-3 border-1 border-gray-400">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-base text-gray-500">Yearly Total</p>
                        <div className="flex items-center justify-center h-8 w-8 bg-white border-1 border-gray-300 text-center rounded-lg">
                            <p className="text-lg font-medium"><img src={wallet} alt="" className="h-5 w-5"/></p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-10">
                        <p className="text-2xl font-bold text-gray-800">{currency}{totalYearlyBill}</p>
                        <p className="text-sm text-gray-500">Annual Projection</p>
                    </div>
                    
                </div>
                
                
                 {/* Card 03*/} 
                    <div className="bg-orange-50 w-full h-44 rounded-2xl p-6 flex flex-col justify-between shadow-sm mt-3 border-1 border-gray-400">
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-base text-gray-500">Active Subscriptions</p>
                        <div className="flex items-center justify-center h-8 w-8 bg-white border-1 border-gray-300 text-center rounded-lg">
                            <p className="text-lg font-medium"><img src={subicon} alt="" className="h-5 w-5"/></p>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-2xl font-bold text-gray-800">{subscriptions.length}</p>
                        <p className="text-sm text-gray-500">Service Tracked</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-2 items-center-safe mt-20 mb-8">
                <img src={booking} alt="" className="h-6 w-6"/>
                <h1 className="text-2xl font-semibold text-gray-800">Subscription Details</h1>
            </div>

            {subscriptions.length > 0 ? (
                
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-between gap-4 mb-10">
                {subscriptions
                    .filter((sub) => sub && sub.id)
                    .map((sub) => (
                    
                        <div key={sub.id} 
                        className="bg-white w-full h-60 rounded-2xl p-8 shadow-md hover:translate-y-1 hover:scale-102 hover:shadow-lg delay-150 duration-200"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-lg font-bold">{sub.name}</div>
                                    <div className="bg-indigo-400 text-white py-0.5 px-1.5 text-xs rounded-2xl border-0.2 mt-2 inline-block font-mono">{sub.category}</div>
                                </div>
                                
                                <div className="flex gap-1">
                                    
                                    <button onClick={() => handleEdit(sub)} className="flex hover:bg-indigo-200 px-1 py-1 rounded-lg itmes-center justify-center">
                                        <img src={edit} alt="" className="w-4 h-4"/>
                                    </button>
                                    
                                    
                                    <button onClick={() => handleDelete(sub.id)} className="flex hover:bg-red-200 px-1 py-1 rounded-lg itmes-center justify-center"> 
                                        <img src={deleteicon} alt="" className="h-4 w-4"/>
                                    </button>
                                    
                                    
                                </div>
                            </div>

                            <div className="flex justify-between mt-5 items-center">
                                <p className="text-gray-700">Price</p>
                                <div className="text-lg font-bold">{currency}{sub.price}</div>
                            </div> 

                            <div className="flex justify-between mt-2">
                                <p className="text-gray-700">Billing</p>
                                <div className="bg-gray-100 text-black py-0.5 px-3 text-xs rounded-2xl border-0.2 mt-2 inline-block font-medium border-white">{sub.billingCycle}</div>
                            </div> 

                            <div className="flex justify-between mt-2">
                                <p className="text-gray-700">Next Payment</p>
                                <div className="text-base font-medium">{sub.nextRenewal}</div>
                            </div> 
                        </div>
                     ))}
                    </div>
                ) : ( 
                    <div className="flex items-center justify-center gap-4 flex-col text-center w-full my-10 py-5 shadow-2xl h-50 rounded-2xl">
                        <img src={oops} alt="" className="h-10 w-10 opacity-80"/>
                         <p className="text-base text-gray-700">Oop's No subscription found</p>
                    </div>
                    )}
            
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