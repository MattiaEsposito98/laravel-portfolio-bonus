import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import '@fortawesome/fontawesome-free/css/all.min.css';
import DefaultLayout from "./layouts/DefaultLayout";
import GlobalProvider from "./context/GlobalContext";
import HomePage from "./pages/Homepage";
import Show from "./pages/Show";

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/project/:id" element={<Show />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider >
    </>
  );
}

export default App;
