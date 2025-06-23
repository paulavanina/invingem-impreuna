import { Route, Routes } from "react-router-dom";
import DespreNoi from "./pages/DespreNoi/DespreNoi";
import PovesteaMea from "./pages/PovesteaMea/PovesteaMea";
import Comunitate from "./pages/Comunitate/Comunitate";
import Inscriere from "./pages/Inscriere/Inscriere";
import Autentificare from "./pages/Autentificare/Autentificare";
import ContulMeu from "./pages/ContulMeu.tsx/ContulMeu";
import SinglePageBlog from "./pages/SinglePageBlog/SinglePageBlog";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PanouDeAdministrare from "./pages/PanouDeAdministrare/PanouDeAdministrare";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DespreNoi />} />
        <Route path="despre-noi" element={<DespreNoi />} />
        <Route path="povestea-mea" element={<PovesteaMea />} />
        <Route path="comunitate" element={<Comunitate />} />
        <Route path="logIn" element={<Autentificare />} />
        <Route path="signUp" element={<Inscriere />} />
        <Route path="povestea-mea/:blog_id" element={<SinglePageBlog />} />
        <Route path="contulMeu" element={<ProtectedRoute><ContulMeu /></ProtectedRoute>} />
        <Route path="panouAdministrare" element={<ProtectedRoute><PanouDeAdministrare /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
