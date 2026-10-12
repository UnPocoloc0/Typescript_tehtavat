import { useState } from "react";

function HaeSana() {

  const [hakusana, setHakusana] = useState("");
  const [kaannos, setKaannos] = useState("");

  // TODO: Tee asynkroninen funktio
  const haeKaannos = async () => {
    if (!hakusana.trim()) return;

    try{

      const response = await fetch(`http://localhost:3000/sanakirja/${hakusana}`);

      if (!response.ok) {
        setKaannos("Sanaa ei löytynyt!");
        return;
      }
      const data = await response.text();
      setKaannos(data);
    } catch (err) {
      console.log("Virheen syy: ", err);
      setKaannos("Virhe yhteydessä palvelimeen");
    }
  };

  return (
    <div style={{ marginTop: "15px" }}>
    <h2 style={{color: "black"}}>Hae sana</h2>

    <input 
      style={{ padding: "10px 20px", fontSize: "16px", background: "#B4E4D6", color: "black"}}
      type="text"
      placeholder="Syötä sana"
      value={hakusana}
      onChange={(e) => setHakusana(e.target.value)}
    
    />
      <button style={{ padding: "10px 20px", fontSize: "16px", background: "#DE7272"}}onClick={haeKaannos}>Käännä</button>
      {kaannos && <p style={{color: "black", marginTop: "15px"}}>Englanniksi {kaannos}</p>}

    </div>

  );

}
export default HaeSana;