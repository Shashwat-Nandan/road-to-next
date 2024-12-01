import Link from "next/link";

import { initialTickets } from "@/data";    
import { paths } from "@/paths";

type TicketStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE';

const ticketIcons: Record<TicketStatus, string> = {
    'NOT_STARTED': '🔴',
    'IN_PROGRESS': '🟡',
    'DONE': '🟢',
}


const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
     <div>
    <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
    <p className="text-sm text-muted-foreground">Your place for all tickets</p>
    </div>
      <ul className="flex-1 flex flex-col gap-y-4 items-center">
        {initialTickets.map((ticket) => (
          <li key={ticket.id}>
            {ticketIcons[ticket.status as TicketStatus]}{` `}
            <Link href={paths.ticket(ticket.id.toString())} className="text-blue-500 underline">{ticket.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
