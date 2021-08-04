
import {
    GET_PRODUCTS_BY_CATEGORY_SUCCESS,
    GET_PRODUCTS_BY_NAME_SUCCESS,
    GET_PRODUCTS_FAIL
} from "./typesAction";
import {clearErrors, returnErrors} from "./errorAction";
import ProductsService from "../services/productsService"

const products = [
    {id: 1, appName: "Integral Basics", displayName: "Integral Basics",description: "Introduction to integration operation...", field: "Math", photo: ""},
    {id: 2, appName: "Indefinite Integral Basics", displayName: "Indefinite Integral Basics", description: "Introduction to integration operation...", field: "Math", photo: ""},
    {id: 3, appName: "Integration by parts", displayName: "Integration by parts", description: "Introduction to integration operation...", field: "Math", photo: ""},
    {id: 4, appName: "Reverse Chain rule", displayName: "Reverse Chain rule", description: "Introduction to integration operation...", field: "Math", photo: ""},
    {id: 5, appName: "Java", displayName: "Java", description: "Introduction to integration operation...", field: "Programming", photo: ""},
    {id: 6, appName: "Python", displayName: "Python", description: "Introduction to integration operation...", field: "Programming", photo: ""},
    {id: 7, appName: "JavaScript", displayName: "JavaScript", description: "Introduction to integration operation...", field: "Programming", photo: ""},
    {id: 8, appName: "C++", displayName: "C++", description: "Introduction to integration operation...", field: "Programming", photo: ""},
    {id: 9, appName: "Classical Physic", displayName: "Classical Physic", description: "Introduction to integration operation...", field: "Physics", photo: ""},
    {id: 10, appName: "Relativistic Physic", displayName: "Relativistic Physic", description: "Introduction to integration operation...", field: "Physics", photo: ""},
    {id: 11, appName: "Quantum Physic", displayName: "Quantum Physic", description: "Introduction to integration operation...", field: "Physics", photo: ""}
];

export const getProductsByCategory = (field) => (dispatch) => {
    return ProductsService.getProducts()
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
                // payload: response.data
                payload: products,
                field:  field
            })
        })
        .catch(error => {
            dispatch(returnErrors(""));
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
            return Promise.reject();
        });
}

export const getProductsByName = (displayName) => (dispatch) => {
    return ProductsService.getProducts()
        .then(response => {
            dispatch(clearErrors());
            dispatch({
                type: GET_PRODUCTS_BY_NAME_SUCCESS,
                // payload: response.data
                payload: products,
                displayName:  displayName
            })
        })
        .catch(error => {
            dispatch(returnErrors(""));
            dispatch({
                type: GET_PRODUCTS_FAIL
            });
            return Promise.reject();
        });
}