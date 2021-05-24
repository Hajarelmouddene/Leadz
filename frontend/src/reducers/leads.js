import { DELETE_LEAD, GET_LEADS } from "../actions/types";

const initialState = {
  leads: [],
};

const leads = (state = initialState, action) => {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
      };
    default:
      return state;
  }
};

export default leads;
