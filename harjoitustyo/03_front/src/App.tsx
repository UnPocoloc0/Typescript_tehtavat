import { AthleteProvider } from "./context/AthleteContext";
import { UrheilijaList } from "./components/UrheilijaList";
import { UrheilijaForm } from "./components/UrheilijaForm";

function App() {
  
  return (
    <AthleteProvider>

      <div style={{ padding: '20px', 
          fontFamily: 'sans-serif', 
          maxWidth:  '800px', 
          margin: '0 auto'}}>
        <h1>Urheilijarekisteri</h1>
       <UrheilijaForm />
        <hr style={{ margin: '20px 0'}} />
        <UrheilijaList />

      </div>
    </AthleteProvider>
  );
}

export default App;


