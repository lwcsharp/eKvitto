import { get } from '../scripts/httpClient.js';
// hämta och spara kvittens i databasen

// const initApp = () => {
//   getTickets();
// };

export const getTickets = async () => {
  try {
    const tickets = await get('tickets');
    console.log('Fetched tickets: ', tickets);
    return tickets;
    // for (let ticket of tickets) {
    //   generateTicketHtml(ticket);
    // }
  } catch (error) {
    console.error('Error fetching tickets: ', error);
  }
};
