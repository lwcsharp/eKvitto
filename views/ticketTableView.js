const messages = {
  loading: 'Loading Data...',
  empty: 'Cannot find data',
  error: 'Error loading data'
};

function createTableRow(ticket) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${ticket.date}</td>
    <td>${ticket.specification}</td>
    <td>${ticket.customer_name}</td>
    <td>${ticket.total_price} kr</td>
    <td>${ticket.ex_vat} kr</td>
    <td>${ticket.vat} kr</td>
  `;
  return row;
}

export function showStatus(tbody, type) {
  tbody.innerHTML = `<tr><td colspan="6" class="loading-message">${messages[type]}</td></tr>`;
}

export function displayTickets(tbody, tickets) {
  tbody.innerHTML = '';
  tickets.forEach(ticket => tbody.appendChild(createTableRow(ticket)));
}