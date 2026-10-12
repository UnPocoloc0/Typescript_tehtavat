import { useState } from "react";
import HaeSana from "./HaeSana";
import LisaaSana from "./LisaaSana";

function App() {
  /*Alkuarvo -> haku
 Puretaan useStaten palautus muuttujiin
 Nuolisyntaksi -> koodi suoritetaan vasta painiketta klikattaessa 
 Annetaan uusi arvo -> Tämä tulee voimaan -> Muut elementit pysyy 
voimassa
Kytketään uudet komponentit näkymään
  */ 
  const [nakyma, setNakyma] = useState("haku");
  return (
    <div style={{ 
      
      backgroundColor: "#FFF6A9", 
      minHeight: "100vh",
      padding: "20px", 
      fontFamily: "sans-serif"}}>
      <h1 style={{color: "black"}}>Sanakirja</h1>

      <div>
        
        <button style={{ padding: "10px 20px", fontSize: "16px", background: "#DE7272"}}onClick={() => setNakyma("haku")}>Hae sana</button>  
        <button style={{padding: "10px 20px", fontSize: "16px", background: "#DE7272" }}onClick={() => setNakyma("lisää")}>Lisää sana</button>  
      </div>  
      <hr />
      <p style={{color: "black"}}>Aktiivinen näkymä: {nakyma}</p>
      {nakyma === "haku" && <HaeSana />}
      {nakyma === "lisää" && <LisaaSana/>}

    </div>
  )
}

export default App;

