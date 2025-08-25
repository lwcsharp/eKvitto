import { get, post, remove } from '../scripts/httpClient.js';

export const getTickets = async () => {
  try {
    const tickets = await get('tickets');
    console.log('Fetched tickets: ', tickets);
    return tickets;
  } catch (error) {
    console.error('Error fetching tickets: ', error);
  }
  
};

  export const createTicket = async (ticketData) => {
    try {
      const response = await post('tickets', ticketData);
      console.log('Created ticket: ', response);
      return response;
    } catch (error) {
      console.error('Error creating ticket: ', error);
      throw error;
    }
};

export const deleteTicket = async (ticketId) => {
  try {
    await remove('tickets', ticketId);
    console.log('Deleted ticket:', ticketId);
    return true;
  } catch (error) {
    console.error('Error deleting ticket:', error);
    throw error;
  }
};
