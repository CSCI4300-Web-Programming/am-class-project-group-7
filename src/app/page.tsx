import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <div
        className="bground"
        style={{
          backgroundImage: "url('/Desktop.png')",
          position: "relative",
        }}
      >
        <a
          href="/mainscreen"
          className="get-started-link"
          style={{
            position: "absolute",
            left: "50%",
            top: "78.5%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "2vw",
            display: "inline-block",
            fontWeight: 700,
            color: "#111111",
          }}
        >
          <b>GET STARTED</b>
        </a>
      </div>
      <Footer showMessage />
    </div>
  );
}
