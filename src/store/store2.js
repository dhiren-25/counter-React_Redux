import { createStore } from "@reduxjs/toolkit"

 const INITIAL_VALUE = {
    counter: 0,
    privacy: false
 }

 const counterReducer = (store = INITIAL_VALUE,action) =>{
    if(action.type === "Increment"){
        return{...store,counter : store.counter + 1};
    }else if(action.type === "Decrement"){
        return{...store, counter: store.counter - 1};
    }else if(action.type === "Add"){
        return{...store, counter: store.counter + Number(action.payload.num)};
    }else if(action.type === "Sub"){
        return{...store, counter: store.counter - Number(action.payload.num)};
    }else if(action.type === "Privacy"){
        return{...store,privacy : !store.privacy};
    }
    return store;
 }



 export const counterStore = createStore(counterReducer);

