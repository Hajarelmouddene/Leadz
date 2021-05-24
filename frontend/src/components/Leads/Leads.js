import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads";
import { useSelector } from "react-redux";

const Leads = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getLeads(dispatch);
  }, []);
  const leads = useSelector((state) => state.leads.leads);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => {
            return (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Leads;
