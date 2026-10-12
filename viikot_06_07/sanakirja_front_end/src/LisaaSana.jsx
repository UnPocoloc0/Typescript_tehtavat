import { useState } from "react";

// Tämä on logiikkalohko
function LisaaSana() {
// Tilojen määrittely
const [suomiSana, setSuomiSana] = useState("");
const [englantiSana, setEnglantiSana] = useState("");
const [viesti, setViesti] = useState("");

// Tiedot palvelimen ymmärtämään muotoon
const lisaaSana = async () => {
  const uusiSana = {
    fin: suomiSana,
    eng: englantiSana
  };
  const jsonData = JSON.stringify(uusiSana);
  console.log("Lähetettävä JSON-merkkijono:", jsonData);

  const vastaus = await fetch("http://localhost:3000/sanakirja/", {
    // Lisätään uusi tieto
    method: "POST",
    // Mitä data on
    headers: {
      "Content-Type": "application/json"
    },
    // Lähetettää JSON-merkkijono
    body: jsonData
  });
  console.log("Palvelimen vastauksen status:", vastaus.status);
  setSuomiSana("");
  setEnglantiSana("");
  setViesti("Sana lisätty: " + suomiSana + "-" + englantiSana);
};


//Luetaan ja päivitetään suomen- ja englanninkielinen sana -> syötekenttä
// Käyttöliittymälohko
return (
  <div style={{marginTop: "15px"}}>
  <h2 style={{color: "black"}}>Lisää sanapari: fi-en</h2>
    <input
     style={{ padding: "10px 20px", fontSize: "16px", background: "#B4E4D6", color: "black"}}
      type="text"
      value={suomiSana}
      onChange={(e) => setSuomiSana(e.target.value)}
    />
    <input
     style={{ padding: "10px 20px", fontSize: "16px", background: "#B4E4D6", color: "black"}}
      type="text"
      value={englantiSana}
      onChange={(e) => setEnglantiSana(e.target.value)} 
    />
    <button style={{ padding: "10px 20px", fontSize: "16px", background: "#DE7272"}}onClick={lisaaSana}>Lisää sana</button>
    <p style={{color: "black"}}>{viesti}</p>

  </div>
);

}
// Tuodaan komponentti käyttöön muualle
export default LisaaSana;