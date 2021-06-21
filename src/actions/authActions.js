import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
const dispatch = useDispatch()
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from './types'


export const registeruser = (userdata,history) =>dispatch=>{
    axios
    .post('/sign',userdata)
    .then(res => history.push('/login'))
    .catch(err =>
        dispatch({
            type: 'GET_ERRORS',
            payload: err.response.data
        }))
}