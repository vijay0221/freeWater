import "./App.css";
import IconComponent from "./components/iconComponent";
import Navigation from "./components/navigation";
import AddsComp from "./components/AdsComp";
import BottleComp from "./components/bottleComp"

export default function App() {
  return (<div className="w-full h-full">
    <Navigation/>
    <IconComponent/>
    <AddsComp/>
    <BottleComp/>
  </div>)
}

