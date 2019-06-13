import {CLOSE_MODAL} from "../components/modal/actions";

const OPEN_MODAL = 'OPEN_MODAL';


let initialState = {
    isModalOpen: false,
}


const modalReduser = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            }

        default:
            return state;
    }}
    export default modalReduser;



    export const setModalAC = () => ({type: OPEN_MODAL});
