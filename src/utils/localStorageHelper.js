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
    const existingArray = getSubscriptions();
    const updatedArray = [...existingArray, newData];
    saveSubscriptions(updatedArray);
}

export const deleteSubscription = (id) => {
    const existingArray = getSubscriptions();
    const updatedArray = existingArray.filter( sub => sub.id !== id );
    saveSubscriptions(updatedArray);
}