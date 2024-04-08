import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage, { loadHomeData } from "./pages/HomePage";
import Registration from "./pages/Registration";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={loadHomeData} />
      <Route path="registration" element={<Registration />} />
      <Route path="login" element={<LoginPage />} />
    </Route>,
  ),
);

export default router;
