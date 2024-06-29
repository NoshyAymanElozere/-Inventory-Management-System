import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Index from "./pages";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="dashboard/*" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
