import { STORAGE_KEY } from "./subscriptionModel.js";

export const getSubscriptions = () => {
    const result = localStorage.getItem(STORAGE_KEY);
    if(result === null){
        return [];
    } else {
        return JSON.parse(result);
    }
}

export const saveSubscriptions = (subscriptionsArray) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptionsArray));
}

export const addSubscription = (newData) => {
    if(!newData || !newData.id || !newData.name){
        console.warn("Skipping invalid subscriptions: ", newData);
        return;
    }

    const existingArray = getSubscriptions();
    const updatedArray = [...existingArray, newData];
    saveSubscriptions(updatedArray);
}

export const deleteSubscription = (id) => {
    if (id == null) return [];

    const existingArray = getSubscriptions();
    const updatedArray = existingArray.filter( sub => String(sub.id) !== String(id));
    saveSubscriptions(updatedArray);
    return updatedArray;
}

export const updateSubscription = (updatedSub) => {   
    const subs = getSubscriptions();

    const updatedList = subs.map((sub) => 
        sub.id === updatedSub.id ? updatedSub : sub
    );

    saveSubscriptions(updatedList);
    return updatedList;
}