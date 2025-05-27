// mellanhand för att skicka data mellan front-end och back-end
// import { addTicket } from "../models/ticketModel.js";

import { loadTicketForm } from '../forms/ticketForm.js';
import { loadTicketTable } from '../tables/ticketTable.js';

console.log('Ticket controller loaded');

const initApp = async () => {
  console.log('Initializing app...');
  try {
    if (document.getElementById('form-container')) {
      await loadTicketForm();
      console.log('Ticket form loaded successfully');
    }

    if (document.getElementById('table-container')) {
      await loadTicketTable();
      console.log('Ticket table loaded successfully');
    }
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
};

document.addEventListener('DOMContentLoaded', initApp);