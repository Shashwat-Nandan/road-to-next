import Link from "next/link";

import { paths } from "@/paths";

const HomePage = () => {
  return (<div>
    <h2 className="text-2xl font-bold">HomePage</h2>

      <Link href={paths.tickets}  className="text-blue-500 underline">View Tickets</Link>
    </div>
  );
};

export default HomePage;
