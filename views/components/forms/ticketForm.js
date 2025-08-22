import { createTicket } from '../../../models/ticketModel.js';

export async function loadTicketForm() {
  try {
    const response = await fetch('/views/components/forms/ticketForm.html');
    const html = await response.text();
    document.getElementById('form-container').innerHTML = html;

    // Setup form handler after form is loaded
    setupFormHandler();
  } catch (error) {
    console.error('Error Loading ticket form:', error);
  }
}

function setupFormHandler() {
  const form = document.querySelector('#add-ticket-form');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const ticketData = Object.fromEntries(formData.entries());

      await createTicket(ticketData);

      // Reset form on success
      form.reset();
      alert('Kvitto skapat!',);
    } catch (error) {
      console.error('Error creating ticket:', error);
      alert('Fel vid skapande av kvitto');
    }
  };
  form.addEventListener('submit', handleSubmit);
}
