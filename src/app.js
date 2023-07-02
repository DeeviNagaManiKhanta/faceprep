import { BrowserRouter, Routes, Route } from "react-router-dom";
import FakeLoginPage from "./fakeLogin";
import HomePage from "./home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login" element={<FakeLoginPage />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
