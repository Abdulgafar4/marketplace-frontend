import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { ModeToggle } from "./modeToggle";

export default async function Header() {
  const { userId } = auth();

  return (
    <div>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">Home</Link>
        {userId && <Link href="/dashboard">Dashboard</Link>}

        <div className="flex gap-4 items-center">
          {userId ? (
            <div className="flex gap-4 items-center">
              <UserButton />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-in">Log In</Link>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
