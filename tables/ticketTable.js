export async function loadTicketTable() {
  try {
    const response = await fetch('/tables/ticketTable.html');
    const html = await response.text();
    document.getElementById('table-container').innerHTML = html;
  } catch (error) {
    console.error('Error Loading ticket table: ', error);
  }
}