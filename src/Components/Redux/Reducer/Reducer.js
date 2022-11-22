const INTIAL_STATE = {
    product: []
}

export default function ProductReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case "PRODUCT-ID":
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}