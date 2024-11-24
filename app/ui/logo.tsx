import { cinzel } from "@/app/styles/fonts";
import { GiPokerHand } from "react-icons/gi";

export default function Logo() {
  return (
    <div className={`${cinzel.className} flex flex-row items-center`}>
      <GiPokerHand className="h-10 w-10 sm:h-12 sm:w-12 mr-1"/>
      <p className="text-[28px] sm:text-[32px] font-bold">Poker Board</p>
    </div>
  );
}
