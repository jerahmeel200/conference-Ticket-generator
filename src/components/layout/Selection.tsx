import { useState } from "react";
import TicketHeader from "./Progress";
import Cover from "./Cover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useTicket } from "../../useContext/Context";
import { Toast } from "../../lib/utils";
import Buttons from "./Buttons";

const ticketOptions = [
  { id: 1, title: "REGULAR ACCESS", price: 0, slot: 20 },
  { id: 2, title: "VIP ACCESS", price: 50, slot: 20 },
  { id: 3, title: "VVIP ACCESS", price: 150, slot: 20 },
];

export default function Selection() {
  const { numTicket: initialNum, dispatch, ticketType } = useTicket();
  const [selectedId, setSelectedId] = useState<number | null>(ticketType);
  const [numTickets, setNumTickets] = useState<number>(initialNum);

  const handleSelection = (id: number) => setSelectedId(id);
  
  const handleSubmit = async () => {
    if (!selectedId) {
      Toast({ title: "Select Ticket Type", description: "Choose your ticket type and number of tickets" });
      return;
    }

    dispatch({ type: "showLoader", payload: { load: true } });
    setTimeout(() => {
      dispatch({ type: "showLoader", payload: { load: false } });
      dispatch({ type: "selectTicket", payload: { id: selectedId, ticketNum: numTickets } });
      localStorage.setItem("status", "second");
      localStorage.setItem("key", JSON.stringify({ id: selectedId, ticketNum: numTickets }));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1500);
  };

  return (
    <>
      <TicketHeader headerObj={{ title: "Ticket Selection", step: 1 }} />
      <Cover>
        <div className="border-[#07373F] background-ticket backdrop-blur-lg border-x-2 border-b-2 p-6 rounded-3xl text-center flex flex-col items-center space-y-2">
          <h1 className="road-rage font-normal text-5xl md:text-6xl text-[#FAFAFA]">Techember Fest ”25</h1>
          <p className="roboto font-normal text-sm md:text-base text-[#FAFAFA] tracking-wide w-[70%] text-center">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="roboto hidden md:block font-normal text-base text-[#FAFAFA] space-x-4 tracking-wide">
            <span>📍 [Event Location]</span> <span>| |</span> <span>March 15, 2025 | 7:00 PM</span>
          </p>
          <p className="roboto md:hidden font-normal text-base text-[#FAFAFA] flex flex-col gap-1 mt-6 tracking-wide">
            <span>📍 [Event Location]</span> <span>March 15, 2025 | 7:00 PM</span>
          </p>
        </div>

        <div className="w-full h-1 bg-[#07373F]" />

        <div className="space-y-2">
          <p className="roboto text-[#FAFAFA] font-normal text-base tracking-wide">Select Ticket Type:</p>
          <div className="bg-[#052228] border border-[#07373F] rounded-3xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {ticketOptions.map(({ id, title, price, slot }) => (
              <div
                key={id}
                onClick={() => handleSelection(id)}
                className={`flex flex-col gap-3 cursor-pointer hover:bg-[#2C545B] hover:border border-[#197686] rounded-xl p-2 transition-all duration-400 ${
                  id === selectedId ? "border bg-[#12464E]" : "border-2 bg-transparent"
                }`}
              >
                <h3 className="text-[#FAFAFA] roboto text-xl font-semibold">{price === 0 ? "Free" : `$${price}`}</h3>
                <div className="space-y-0 font-normal text-[#FAFAFA] tracking-wide">
                  <h3 className="text-base">{title}</h3>
                  <p className="!text-[#D9D9D9]">{slot}/52</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="roboto text-[#FAFAFA] font-normal text-base tracking-wide">Number of Tickets</p>
          <Select onValueChange={(e) => setNumTickets(Number(e))} defaultValue={numTickets.toString()}>
            <SelectTrigger className="w-full cursor-pointer border border-[#07373F] text-[#FAFAFA]">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent className="bg-[#052228] text-[#FAFAFA] border border-[#07373F]">
              <SelectGroup>
                {Array.from({ length: 5 }, (_, i) => (
                  <SelectItem key={i} value={`${i + 1}`} className="hover:bg-[#24A0B5] duration-300 translate-all hover:text-[#FAFAFA] cursor-pointer">
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Buttons first="Cancel" second="Next" click2={handleSubmit} />
      </Cover>
    </>
  );
}
