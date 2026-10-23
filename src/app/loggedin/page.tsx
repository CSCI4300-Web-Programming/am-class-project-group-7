import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar loggedIn={true} />
      <div
        className="bground"
        style={{ backgroundImage: "url('/LoggedIn.png')", alignItems: "center", justifyContent: "center", display: "flex" }}
      ></div>
    </div>
  );
}
