import { fetchParticipants } from "@/app/lib/actions";
import PokerTable from "@/app/ui/display/poker-table";
import Logo from "@/app/ui/logo";
import { Button } from "@radix-ui/themes";
import { unstable_noStore } from 'next/cache';
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default async function Page() {
  unstable_noStore();
  const players = await fetchParticipants();

  return (
    <main className="flex min-h-screen flex-col p-6 overflow-x-hidden">
      <header className="flex items-center justify-between mb-8">
        <Logo />
        <Link href="/">
          <Button color="gray" variant="soft" highContrast className="flex items-center">
            <FaHome className="text-lg"/>
            <span className="hidden sm:inline-block">Home</span>
          </Button>
        </Link>
      </header>
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 inline-block">
          座席
        </h1>
      </section>
      <section className="flex justify-center items-center mb-8">
      <div
        className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl"
      >
        {/* 背景画像を擬似要素で設定 */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/img/table.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* PokerTableは背景より前に描画 */}
        <div className="relative z-10">
          <PokerTable players={players} />
        </div>
      </div>
      </section>
    </main>
  );
}
