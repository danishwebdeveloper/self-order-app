import Axios from "axios";
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, ORDER_SET_TYPE } from "./Constants"

export const setOrderType = (dispatch, orderType) => {
    return dispatch({
        type: ORDER_SET_TYPE,
        payload: orderType,
    });
};

// dispatch 
export const listCatergories = async(dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });

    try {
        // ajax request to backend
        const { data } = await Axios.get('/api/categories');

        // dispatch this data to success
        return dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        return dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.message
        })
    }
}