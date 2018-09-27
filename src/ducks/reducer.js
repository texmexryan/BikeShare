const initialState = {   // this file is the reducer 
    user: {},
    itemsInCart: 0
}

//action types
const GET_USER_DATA = 'GET_USER_DATA'
const ITEMS_IN_CART = "ITEMS_IN_CART"

//action creator
export function getUserData(data){
    // console.log(data)
    return{
        type: GET_USER_DATA,
        payload: data
    }
}
export function addToCart(num) {
    console.log(num)
    return {
        type: ITEMS_IN_CART,
        payload: num
    }
}



// reducer
export default function reducer(state = initialState, action) {
    // console.log(action.payload)
    switch (action.type) {
        
         case GET_USER_DATA: 
         return Object.assign({}, state, {user: action.payload})
        
         case ITEMS_IN_CART:
         return Object.assign({}, state, {itemsInCart: action.payload})

        default: 
        return state
    }
}