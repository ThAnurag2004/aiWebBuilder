import "./App.css";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      className="w-full min-h-screen bg-white overflow-x-hidden
    [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]
    dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
    dark:text-white"
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
