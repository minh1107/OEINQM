import AboutUs from "components/AboutUs";
import Slide from "components/Header";
import TextRun from "components/TextRun";
import './css/common.css'
import Member from "components/Member";
import Service from "components/Service";
import ClientAndPartner from "components/ClientAndPartner";
import LastNews from "components/LastNews";
import Footer from "components/Footer";
import Locate from "components/Locate";
import 'aos/dist/aos.css';
import 'css/mobile.css'

function App() {
  return (
    <div className="app">
      <Slide />
      <AboutUs />
      <TextRun text={'offshore <span class="text-blue">Energy</span> installation'}/>
      <Member />
      <Service />
      <TextRun text={'building for <span class="text-blue">Green</span> energy'} />
      <Locate />
      <ClientAndPartner />
      <LastNews />
      <Footer />
    </div>
  );
}

export default App;
