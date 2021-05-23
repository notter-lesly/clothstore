import "./App.scss";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Woman from "../src/components/Woman";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ul>
          <li> MAN </li>
          <li> WOMAN </li>
        </ul>

        <Woman />
      </div>
      <Footer />
    </div>
  );
}

export default App;
