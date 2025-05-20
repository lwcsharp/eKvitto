// mellanhand för att skicka data mellan front-end och back-end
// import { addTicket } from "../models/ticketModel.js";

import { loadTicketForm } from "../forms/ticketForm.js";
import { loadTicketTable } from "../tables/ticketTable.js";

console.log("Ticket controller loaded");

const initApp = async () => {
  console.log("Initializing app...");
  try {
    await loadTicketForm();
    console.log("Ticket form loaded successfully");
    await loadTicketTable();
  } catch (error) {
    console.error("Failed to initialize app:", error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);