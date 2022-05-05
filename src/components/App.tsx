import "../styles/App.css";
import { SideBar, Body, Navigation, Footer } from "./";

function App() {
  return (
    <section className="App overflow-hidden">
      <SideBar />
      <Navigation />
      <Body />
      <Footer />
    </section>
  );
}

export default App;
