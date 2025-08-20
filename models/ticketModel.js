import { get, post } from '../scripts/httpClient.js';
// hämta och spara kvittens i databasen

// const initApp = () => {
//   getTickets();
// };

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
