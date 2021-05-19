import { GET_LEADS } from "./types";

// Get Leads
export const getLeads = () => (dispatch) => {
  fetch("api/lead")
    .then((res) => {
      if (res.status > 400) {
        console.log("there are no leads in our database");
      }
      return res.json();
    })
    .then((data) =>
      dispatch({
        type: GET_LEADS,
        payload: data,
      })
    )
    .catch((err) => console.log(err));
};

// Add Lead

//Delete Lead
