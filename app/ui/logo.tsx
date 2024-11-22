import { cinzel } from "@/app/styles/fonts";
import { GiPokerHand } from "react-icons/gi";

export default function Logo() {
  return (
    <div className={`${cinzel.className} flex flex-row items-center`}>
      <GiPokerHand className="h-12 w-12 mr-1"/>
      <p className="text-[32px] font-bold">Poker Board</p>
    </div>
  )
}
