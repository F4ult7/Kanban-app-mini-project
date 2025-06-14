import Navbar from "./components/nav/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
