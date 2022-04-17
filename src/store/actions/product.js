export const addCart = id => {
    return{
        type: "ADD_TO_CART",
        payload: id
    }
}

export const incrementItem = id => {
    return{
        type: "INCREMENT_ITEM",
        payload: id
    }
}
export const decrementItem = id => {
    return{
        type: "DECREMENT_ITEM",
        payload: id
    }
}
export const removeFromCart = id => {
    return{
        type: "REMOVE_ITEM",
        payload: id
    }
}
export const resetCart = () => {
    return{
        type: "RESET_CART",
    }
}