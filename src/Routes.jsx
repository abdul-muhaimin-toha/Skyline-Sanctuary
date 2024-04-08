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
import PrivateRoute from "./privateRoutes/PrivateRoute";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import ContactUsPage from "./pages/ContactUsPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} loader={loadHomeData} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="propertyDetails/:id"
        element={
          <PrivateRoute>
            <PropertyDetailsPage />
          </PrivateRoute>
        }
        loader={loadHomeData}
      />
      <Route
        path="profileUpdate"
        element={
          <PrivateRoute>
            <UpdateProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact-us"
        element={
          <PrivateRoute>
            <ContactUsPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
