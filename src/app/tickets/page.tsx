import clsx from "clsx";
import Link from "next/link";

import { initialTickets } from "@/data";    
import { paths } from "@/paths";


type TicketStatus = 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE';

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const ProgressIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
);

const CheckIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
);

const ticketIcons: Record<TicketStatus, React.ReactNode> = {
    'NOT_STARTED': <DocumentIcon />,
    'IN_PROGRESS': <ProgressIcon />,
    'DONE': <CheckIcon />,
}


const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
     <div>
    <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
    <p className="text-sm text-muted-foreground">Your place for all tickets</p>
    </div>
      <ul className="flex-1 flex flex-col gap-y-4 items-center animate-fade-in-from-top">
        {initialTickets.map((ticket) => (
          <li key={ticket.id} className="w-full max-w-[400px] p-4 border border-slate-100 rounded-md">
            {ticketIcons[ticket.status as TicketStatus]}{` `}{ticket.title}
            <p className={clsx("text-sm truncate", {
              "line-through": ticket.status === 'DONE',
            })}>{ticket.content}</p>
            <Link href={paths.ticket(ticket.id.toString())} className="text-blue-500 underline">View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
