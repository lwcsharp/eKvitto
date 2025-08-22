const messages = {
  loading: 'Loading Data...',
  empty: 'Cannot find data',
  error: 'Error loading data',
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
    <td>
      <button class="delete-btn" data-id="${ticket._id}">
        <i class="fas fa-trash"></i>
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
