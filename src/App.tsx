import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <MainComponent>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employee />} />
      </Routes>
    </MainComponent>
  );
}

export default App;
