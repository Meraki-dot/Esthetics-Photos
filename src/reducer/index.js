import { FETCH_PICS, FETCH_PIC_SEARCH, ADD_PIC, DELETE_PIC } from '../constants';

const initialState = {
    picBank: [],
    picBankSearch: [],
    userCollection: [],
    idx: null
}

const deletePic = (state, idx) => {
    let coll = state.userCollection;
    coll.splice(idx, 1);
    let newState = {
        ...state,
        userCollection: [...state.userCollection]
    }
    return newState
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PICS:
            return {
                ...state,
                picBank: action.payload,
            }
        case FETCH_PIC_SEARCH:
            return {
                ...state,
                picBankSearch: action.payload,
            }
        case ADD_PIC:
            return {
                ...state,
                userCollection: [...state.userCollection, action.payload]
            }
        case DELETE_PIC:
            return deletePic(state, action.idx)
        default: 
            return state;
    }
};
export default reducer;