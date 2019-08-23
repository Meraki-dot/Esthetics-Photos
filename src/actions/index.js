import {
  ADD_PIC,
  DELETE_PIC,
  FETCH_PICS,
  FETCH_PIC_DETAILS,
  FETCH_PIC_SEARCH
} from '../constants'
import axios from 'axios';

export function addPic(pic) {
  return {
    type: ADD_PIC,
    payload: pic
  };
}

export function deletePic(idx) {
  return {
    type: DELETE_PIC,
    idx: idx
  };
}

const apiKey = '12876449-a50224a9aeb3b5ed5b39c83ed';

export const fetchPics = () => dispatch => 

  axios.get(`https://pixabay.com/api/?key=${apiKey}`)
    .then(res => {
      dispatch({ type: FETCH_PICS, payload: res.data.hits })
      dispatch({ type: ADD_PIC, payload: res.data.hits.id })
    })

const searchPics = (search) => dispatch =>

  axios.get(`https://pixabay.com/api/?key=${apiKey}/&q=${search}`)
    .then(res => {
      dispatch({ type: FETCH_PIC_SEARCH, payload: res.data.hits })
      console.log(res.data.hits)
    })
    export default searchPics;