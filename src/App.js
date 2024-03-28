import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Routing from "./Routing";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
