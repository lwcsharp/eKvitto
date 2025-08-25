const messages = {
  loading: 'Loading Data...',
  empty: 'Cannot find data',
  error: 'Error loading data',
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('en-GB',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

function createTableRow(ticket) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${formatDate(ticket.date)}</td>
    <td>${ticket.specification}</td>
    <td>${ticket.customer_name}</td>
    <td>${ticket.total_price} kr</td>
    <td>${ticket.ex_vat} kr</td>
    <td>${ticket.vat} kr</td>
    <td>
      <button class="delete-btn" data-id="${ticket._id}">
        <i style="font-size:20px" class="fa">&#xf014;</i>      
      </button>
    </td>
  `;
  return row;
}

export function showStatus(tbody, type) {
  tbody.innerHTML = `<tr><td colspan="6" class="loading-message">${messages[type]}</td></tr>`;
}

export function displayTickets(tbody, tickets, onDelete) {
  tbody.innerHTML = '';
  tickets.forEach((ticket) => {
    const row = createTableRow(ticket);
    const deleteBtn = row.querySelector('.delete-btn');

    if (deleteBtn) {
      deleteBtn.addEventListener('click', () => onDelete(ticket._id));
    }

    tbody.appendChild(row);
  });
}
