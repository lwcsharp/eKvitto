export async function loadTicketForm() {
  try {
    const response = await fetch('/views/components/forms/ticketForm.html');
    const html = await response.text();
    document.getElementById('form-container').innerHTML = html;
  } catch (error) {
    console.error('Error Loading ticket form: ', error);
  }
}