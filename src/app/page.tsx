import Image from "next/image";

export default function Home() {
  return (
    <div className="bground" style={{backgroundImage: "url('/Desktop.png')", alignItems: "center", justifyContent: "center", display: "flex"}}>
      <a href="/mainscreen" style={{margin: "49% 0 0 0", textAlign: "center", fontSize: "4cqw"}}> 
      <b>GET STARTED</b>
      </a> 

    </div>
  );
}
