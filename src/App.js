import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Dashboard from "./components/dashBoard/dashBoard";
// import Route from "./helpers/Routes";
import "./App.css";
import { getHomePage } from "./components/store/entities/formData";
import { useSelector } from "react-redux";

function App() {
  const page = useSelector(getHomePage);

  console.log("--->", page);

  const showPage = () => {
    if (page === "form") {
      return (
        <div className="formHolder">
          <RegistrationForm />
        </div>
      );
    }
    if (page === "dash") {
      return <Dashboard />;
    }
  };
  return (
    <div className="container">
      {showPage()}

      {/* <Route path="/">
        <div className="formHolder">
          <RegistrationForm />
        </div>
      </Route>
      <Route path="/Dashboard">
        <Dashboard />
      </Route> */}
    </div>
  );
}

export default App;
