import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/common/Loader/Loader";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLastRoute } from "./redux/uiSlice";
import Layout from "./layouts/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const WorksPage = lazy(() => import("./pages/WorksPage/WorksPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage/ContactUsPage"));

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLastRoute(location.pathname));
  }, [location.pathname, dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="works" element={<WorksPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
