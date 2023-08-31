import AboutUs from "components/AboutUs";
import Slide from "components/Header";
import TextRun from "components/TextRun";
import './css/common.css'

function App() {
  return (
    <div className="app">
      <Slide />
      <AboutUs />
      <TextRun text={'offshore <span class="text-blue">Energy</span> installation'}/>
      <div style={{height: '100vh'}}></div>
    </div>
  );
}

export default App;
