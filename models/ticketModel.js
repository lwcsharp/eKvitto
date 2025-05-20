// hämta och spara kvittens i databasen
const initApp = () => {
  getTickets();
};

const getTickets = async () => {
  try {
    const tickets = await get('tickets');
    console.log(tickets);
    for (let ticket of tickets) {
      generateTicketHtml(ticket);
    }
  } catch (error) {
    console.error('Error fetching tickets: ', error);
  }
};
