import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import Selection from "./components/layout/Selection";
import AttendeeDetails from "./components/layout/AttendeeDetails";
import Ready from "./components/layout/Ready";
import { useTicket } from "./useContext/Context";

export default function App() {
  const { status, dispatch, loading } = useTicket();

  // Handle body scroll when loading state changes
    useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  // Retrieve and set status from localStorage
  useEffect(() => {
    const storedStatus = localStorage.getItem("status") || "first";
    dispatch({ type: "statusSet", payload: { stats: storedStatus } });
  }, [dispatch]);

  // Retrieve and set ticket details from localStorage
  useEffect(() => {
    const storedTicket = localStorage.getItem("key");
    const ticketData = storedTicket ? JSON.parse(storedTicket) : { id: null, ticketNum: 1 };
    dispatch({ type: "selectTicket2", payload: { id: ticketData.id, ticketNum: ticketData.ticketNum } });
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-12 md:gap-20 background">
      <Header />

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed top-0 w-full h-screen flex items-center justify-center z-[999999] backdrop-blur-[4px] background-ticket">
          <ClipLoader color="#197686" />
        </div>
      )}

      <Container>
        {status === "first" && <Selection />}
        {status === "second" && <AttendeeDetails />}
        {status === "third" && <Ready />}
      </Container>
    </div>
  );
}
