import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Dashboard from "./components/dashBoard/dashBoard";
import Route from "./helpers/Routes";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Route path="/">
        <div className="formHolder">
        <RegistrationForm />
        </div>
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
