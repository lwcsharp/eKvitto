import { getTickets } from '../../../models/ticketModel.js';

export async function loadTicketTable() {
  try {
    //Load table template
    const response = await fetch('/views/tables/ticketTable.html');
    const html = await response.text();
    document.getElementById('table-container').innerHTML = html;

    // Visa laddningsindikator
    const tbody = document.querySelector('tbody');
    tbody.innerHTML =
      '<tr><td colspan="6" style="text-align: center;">Loading Data...</td></tr>';

    //Get & show data
    const tickets = await getTickets();
    if (tickets && tickets.length > 0) {
      const tbody = document.querySelector('tbody');
      tbody.innerHTML = ''; // Clear example data

      tickets.forEach((ticket) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${ticket.date}</td>
          <td>${ticket.specification}</td>
          <td>${ticket.customer_name}</td>
          <td>${ticket.total_price} kr</td>
          <td>${ticket.ex_vat} kr</td>
          <td>${ticket.vat} kr</td>
        `;
        tbody.appendChild(row);
      });
    } else {
      tbody.innerHTML =
        '<tr><td colspan="6" style="text-align: center;">Cannot find data</td></tr>';
    }
  } catch (error) {
    console.error('Error Loading ticket table: ', error);
    document.querySelector('tbody').innerHTML =
      '<tr><td colspan="6" style="text-align: center;">Failed to load data</td></tr>';
  }
}
