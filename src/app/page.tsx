import Link from "next/link";

import { paths } from "@/paths";

const HomePage = () => {
  return (
  <div className="flex-1 flex flex-col gap-y-8">
    <div>
    <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
    <p className="text-sm text-muted-foreground">Your place to start</p>
    </div>
    
    <div className="flex-1 flex flex-col items-center">
    <Link href={paths.tickets}  className="text-blue-500 underline">View Tickets</Link>
    </div>
      
    </div>
  );
};

export default HomePage;
