const initialTickets = [
    {
        id: 1,
        title: "Ticket 1",
        content: "Ticket 1 content",
        status: "DONE" as const,
    },
    {
        id: 2,
        title: "Ticket 2",
        content: "Ticket 2 content",
        status: "IN_PROGRESS" as const,
    },
    {
        id: 3,
        title: "Ticket 3",
        content: "Ticket 3 content",
        status: "NOT_STARTED" as const,
    },
]

export { initialTickets };