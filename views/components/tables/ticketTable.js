import { getTickets } from '../../../models/ticketModel.js';
import { showStatus, displayTickets } from '../../ticketTableView.js';

export async function loadTicketTable() {
  try {
    const response = await fetch('/views/components/tables/ticketTable.html');
    const html = await response.text();
    document.getElementById('table-container').innerHTML = html;

    // Visa laddningsindikator
    const tbody = document.querySelector('tbody');
    showStatus(tbody, 'loading'); 

    const tickets = await getTickets();
    if (tickets && tickets.length > 0) {
      displayTickets(tbody, tickets);
    } else {
      showStatus(tbody, 'empty');
    }
  } catch (error) {
    console.error('Error Loading ticket table: ', error);
    const tbody = document.querySelector('tbody');
    showStatus(tbody, 'error');
  }
}
