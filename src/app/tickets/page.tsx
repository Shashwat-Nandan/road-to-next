import Link from "next/link";

import { initialTickets } from "@/data";    
import { paths } from "@/paths";

const TicketsPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">TicketsPage</h2>
      <ul>
        {initialTickets.map((ticket) => (
          <li key={ticket.id}>
            <Link href={paths.ticket(ticket.id.toString())} className="text-blue-500 underline">{ticket.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
