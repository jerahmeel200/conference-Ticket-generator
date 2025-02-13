import BoxContainer from "./components/layout/BoxContainer";
import Header from "./components/layout/Header";
 
 
 
import { useTicket } from "./context/TicketContext";
import { useEffect } from "react";
import { ClipLoader  } from "react-spinners";
import TicketSelection from "./components/layout/TicketSelection";
import AttendeeDetails from "./components/layout/AttendeeDetails";
import Ready from "./components/layout/Ready";
export default function App() {
  const { status, dispatch, loading } = useTicket();
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);
  useEffect(
    function () {
      const stat = localStorage.getItem("status")
        ? localStorage.getItem("status")
        : "first";
      dispatch({ type: "statusSet", payload: { stats: stat } });
    },
    [dispatch]
  );
  useEffect(
    function () {
      const stat = localStorage.getItem("numkey")
        ? JSON.parse(localStorage.getItem("numkey")!)
        : { id: null, ticketNum: 1 };
      dispatch({
        type: "selectTicket2",
        payload: { id: stat.id, ticketNum: stat.ticketNum },
      });
    },
    [dispatch]
  );

  return (
    <div className="w-full min-h-screen background flex flex-col items-center gap-12 md:gap-20">
      <Header />

      <div className="w-full flex items-center justify-center ">
        {loading && (
          <div className="h-screen top-0 fixed flex items-center justify-center z-[999999] overflow-auto background-ticket  backdrop-blur-[4px] w-full">
            <ClipLoader  color="#197686" />
          </div>
        )}
        <BoxContainer>
          {status === "first" && <TicketSelection />}
          {status === "second" && <AttendeeDetails
 />}
          {status === "third" && <Ready />}
        </BoxContainer>
      </div>
    </div>
  );
}
