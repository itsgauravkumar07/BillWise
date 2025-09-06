export const STORAGE_KEY="billwise_subscriptions";

export const subscriptionExample = {
    id: "uuid-or-timestamp",
    name: "",
    price: 0,
    currency: "INR",
    billingCycle: "monthly",
    nextRenewal: "",
    category: "",
    notes: "",
    createdAt: new Date().toISOString()
};