import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
import MainComponent from "./components/MainComponent";
import NoticeBoard from "./components/NoticeBoard";

function App() {
  return (
    <MainComponent>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/noticeboard" element={<NoticeBoard />} />
      </Routes>
    </MainComponent>
  );
}

export default App;
