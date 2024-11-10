import Link from "next/link";
import EventList from "./event-list";
import { buttonVariants } from "../ui/button";
import { PlusCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="h-full w-full mt-16 space-y-4">
      <div className="flex flex-col md:items-center justify-center">
        <Link
          href={"/event"}
          className={buttonVariants({ variant: "outline" })}
        >
          <PlusCircle />
          Create event
        </Link>
      </div>
      <EventList />
    </div>
  );
}
