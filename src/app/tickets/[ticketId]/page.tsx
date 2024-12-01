import { initialTickets } from "@/data";

const TicketPage = ({ params }: { params: { ticketId: string } }) => {
    const ticket = initialTickets.find((ticket) => ticket.id === parseInt(params.ticketId));

  return <div>
        <h2 className="text-2xl font-bold">TicketPage {params.ticketId}</h2>
        <p className="text-lg font-semibold">{ticket?.title}</p>
        <p className="text-gray-300">{ticket?.content}</p>
    </div>;
};

export default TicketPage;
