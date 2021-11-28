import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import SignInPage from "./containers/SignInPage/SignInPage";
import IssuePage from "./containers/IssuePage/IssuePage";
import ComputersPage from "./containers/ComputersPage/ComputersPage";
function App() {
  let routes;

  routes = (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/issue/*" element={<IssuePage />} />
      <Route path="/computers/*" element={<ComputersPage />} />
    </Routes>
  );

  return (
    <div className="App" style={{ backgroundColor: "#d9d9d9" }}>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
