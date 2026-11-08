import { AthleteProvider } from "./context/AthleteContext";
import { UrheilijaList } from "./components/UrheilijaList";
import { UrheilijaForm } from "./components/UrheilijaForm";
import { HaeUrheilijaTunnuksella } from "./components/HaeUrheilija";
import { PoistaUrheilijaTunnuksella } from "./components/PoistaUrheilija";
import { MuokkaaUrheilijaaForm } from "./components/MuokkaaUrheilijaaForm";

// Määrää visuaalisen järjestyksen ja toimii kehyksenä komponenteille
function App() {
  
  return (
    // Tärkein kytkentä -> Tagin sisäpuolella olevat komponentit -> päästään useState-koukkuun 
    <AthleteProvider>

      <div style={{ padding: '20px', 
          fontFamily: 'sans-serif', 
          maxWidth:  '800px', 
          margin: '0 auto'}}>
        <h1>Urheilijarekisteri</h1>
       <UrheilijaForm />
       <HaeUrheilijaTunnuksella />
       <PoistaUrheilijaTunnuksella />
       <MuokkaaUrheilijaaForm />
        <hr style={{ margin: '20px 0'}} />
        <UrheilijaList />

      </div>
    </AthleteProvider>
  );
}

export default App;


