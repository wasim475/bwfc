import Account from "./components/Account";
import Bannar from "./components/Bannar";
import Client from "./components/Client";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Paymentt from "./components/Paymentt";
import Residence from "./components/Residence";
import Sponsor from "./components/Sponsor";

function App() {
  return (
    <>
      <Navbar/>
      <Bannar/>
      <Sponsor/>
      <Feature/>
      <Paymentt/>
      <Account/>
      {/* <Client/> */}
      <Residence/>
    </>
  );
}

export default App;
