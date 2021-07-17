import {GET_PRODUCTS_FAIL, GET_PRODUCTS_SUCCESS} from "../actions/typesAction";

const initialState = {
    products: []
}


export function productsReducer (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            switch (action.field){
                case "all":
                    return {
                        ...state,
                        products: action.payload
                    };
                case "math":
                case "programming":
                case "physics":
                    return {
                        ...state,
                        products: action.payload.filter(product => {
                            return product.field.toLowerCase() === action.field ? product : "";
                        })
                    };
                default:
                    return {
                        ...state,
                        products: action.payload
                    }
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                products: []
            };
        default:
            return state;
    }
}