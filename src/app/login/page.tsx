import Navbar from "../../components/Navbar";
import SignInLink from "../../components/SignInLink";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <div
        className="bground"
        style={{
          backgroundImage: "url('/Login.png')",
          position: "relative",
        }}
      >
        <SignInLink />
      </div>
    </div>
  );
}
