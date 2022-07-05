import { useReducer, useEffect } from "react";
import { BASE_URL } from "../App";

const initialState = {
    loading: true,
    error: false,
    success: false,
}

const fetchLoading = () => ({
    type: 'LOADING',
});

const fetchSuccess = (data) => ({
    type: 'SUCCESS',
    payload: data,
});
const fetchError = (data) => ({
    type: 'ERROR',
    payload: data,
});

const reducer = (authorsList = initialState, action = {}) => {
    switch(action.type){
        case fetchLoading().type: 
            return {
                loading: true,
                success: false,
                error: false,
            }
        case fetchSuccess().type: 
            return {
                loading: false,
                success: action.payload,
                error: false,
            }
        case fetchError().type: 
            return {
                loading: false,
                success: false,
                error: true,
            }
        default:
            return authorsList
    }
}

export const useAuthors = () => {

    const [authorsList, dispatch] = useReducer(reducer, reducer());
    
    useEffect(() => {
        fetch(BASE_URL+'/authors')
        .then((res) => res.json())
        .then((res) => {
            // setAuthorsList(res);
            dispatch(fetchSuccess(res));            
        })
        .catch((err) => {
            dispatch(fetchError(err));
        });  
    }, []);

    return { 
        authorsList
     };
}