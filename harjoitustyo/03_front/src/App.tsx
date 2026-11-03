import { AthleteProvider } from "./context/AtheleteContext";

function App() {
  
  return (
    <AthleteProvider>

      <div style={{ padding: '20px', 
          fontFamily: 'sans-serif', 
          maxWidth:  '800px', 
          margin: '0 auto'}}>
        <h1>Urheilijarekisteri</h1>
        <p>Context valmiina ja kytketty sovellukseen</p>

      </div>
    </AthleteProvider>
  );
}

export default App;


