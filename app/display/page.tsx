import { fetchParticipants } from "@/app/lib/data";
import Logo from "@/app/ui/logo";
import PokerTable from "@/app/ui/poker-table";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const players = await fetchParticipants();

  return (
    <main className="flex min-h-screen flex-col p-6 overflow-x-hidden">
      <header className="flex items-center justify-between mb-8">
        <Logo />
        <Link href="/">
          <Button color="gray" variant="soft" highContrast className="flex items-center">
            <FaHome className="text-lg" />
            <span className="hidden sm:inline-block">Home</span>
          </Button>
        </Link>
      </header>
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 inline-block">
          座席
        </h1>
      </section>
      <section className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
          <PokerTable players={players} />
        </div>
      </section>
    </main>
  );
}
