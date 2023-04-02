import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Settings from "./components/Settings";


function App() {
  return (
    <>
      <Heading />

      <div className="main-body">
        <Settings />
        <Banner />
      </div>

      <Footer/>
    </>
  );
}

export default App;
