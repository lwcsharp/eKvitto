// component controller:
// manages logic & flow of the table
// Loads the ticket table, fetches data, and handles delete logic

import { getTickets, deleteTicket } from '../../../models/ticketModel.js';
import { showStatus, displayTickets } from '../../ticketTableView.js';

export async function loadTicketTable() {
  try {
    const response = await fetch('/views/components/tables/ticketTable.html');
    const html = await response.text();
    document.getElementById('table-container').innerHTML = html;

    // show loadingindication
    const tbody = document.querySelector('tbody');
    showStatus(tbody, 'loading');

    // Fetch tickets from model
    const tickets = await getTickets();
    if (tickets && tickets.length > 0) {

      // Render tickets & send in/callback/pass delete handler
      displayTickets(
        tbody, // 1. the element where the tickets will be displayed
        tickets,  // 2. actual list of tickets
        (id) => handleDelete(id, tbody) // 3. a function that takes an ID & calls handleDelete
        
      ); 
    } else {
      showStatus(tbody, 'empty');
    }
  } catch (error) {
    console.error('Error Loading ticket table: ', error);
    const tbody = document.querySelector('tbody');
    showStatus(tbody, 'error');
  }
}

async function handleDelete(ticketId, tbody) {
  try {
    if (confirm('Är du säker på att du vill radera detta kvitto?')) {
      await deleteTicket(ticketId);
      const tickets = await getTickets(); //refresh table data
      displayTickets(tbody, tickets, (id) => handleDelete(id, tbody));
    }
  } catch (error) {
    console.error('Error deleting ticket:', error);
    alert('Kunde inte radera kvittot');
  }
}
