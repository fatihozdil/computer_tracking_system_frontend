import "./App.css";
import { Redirect, Route, Routes, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import SignInPage from "./containers/SignInPage/SignInPage";
import IssuePage from "./containers/IssuePage/IssuePage";
function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/signin" exact element={<SignInPage />} />
      <Route path="/" exact element={<IssuePage />} />
    </Routes>
  );

  return (
    <div className="App" style={{ backgroundColor: "#d9d9d9" }}>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
