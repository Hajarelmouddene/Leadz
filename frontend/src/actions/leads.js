import { GET_LEADS, DELETE_LEAD } from "./types";

// Get Leads
export const getLeads = (dispatch) => {
  fetch("api/lead")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: GET_LEADS,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

//Delete Lead

export const deleteLead = (id, dispatch) => {
  fetch(`api/lead/${id}/`, {
    method: "DELETE",
  })
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
