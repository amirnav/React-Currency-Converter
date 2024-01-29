import "./App.css";
import Header from "./components/Header";
import Converter from "./components/Converter";
import PersianDate from "./components/PersianDate";

function App() {
  return (
    <div className="app">
      <Header />
      <PersianDate/>
      <h1 className="title">Currency Converter</h1>      
      <Converter />
      
    </div>
  );
}

export default App;
