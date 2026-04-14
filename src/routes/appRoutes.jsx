import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePageLayout from "../components/layout/SinglePageLayout";

function AppRoutes({ toggleTheme, theme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<SinglePageLayout toggleTheme={toggleTheme} theme={theme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;