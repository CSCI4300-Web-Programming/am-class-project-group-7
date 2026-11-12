import Image from "next/image";
import connectMongoDB from "../../config/mongodb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  connectMongoDB();
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div
        className="bground"
        style={{
          position: "relative",
          width: "min(100vw, 118.5185vh)",
          marginInline: "auto",
          marginBlockStart: "4.5rem",
        }}
      >
        <Image
          src="/libs2.jpg"
          alt="Exterior of the science building"
          width={100}
          height={100}
          loading="eager"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxHeight: "calc(100vh - 16rem)",
            maxWidth: "800px",
            marginInline: "auto",
            objectFit: "contain",
            borderRadius: "30px",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 85%, transparent), linear-gradient(to bottom, transparent, black 10%, black 85%, transparent)",
            maskComposite: "intersect",
          }}
        />
        <a
          href="/mainscreen"
          className="get-started-link"
          style={{
            position: "absolute",
            left: "50%",
            top: "85%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "2vw",
            display: "inline-block",
            fontWeight: 700,
            color: "#111111",
            backgroundColor: "#ba0c2f",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
            border: "2px solid transparent",
          }}
        >
          <b>GET STARTED</b>
        </a>
      </div>
      <div style={{ marginTop: "auto" }}>
        <Footer showMessage />
      </div>
    </div>
  );
}
