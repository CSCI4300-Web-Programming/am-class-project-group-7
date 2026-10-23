import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <div
        className="bground"
        style={{ backgroundImage: "url('/MainScreen.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
      ></div>
      <Footer />
    </div>
  );
}
