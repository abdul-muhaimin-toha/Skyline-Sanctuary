import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage, { loadHomeData } from "./pages/HomePage";
import SignUp from "./pages//SIgnUp";
import LoginPage from "./pages/LoginPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={loadHomeData} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="propertyDetails/:id"
        element={<PropertyDetailsPage />}
        loader={loadHomeData}
      />
    </Route>,
  ),
);

export default router;
