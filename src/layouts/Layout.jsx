import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";

const Layout = () => {
  const theme = useSelector((state) => state.ui.theme);
  return (
    <div className="container" data-theme={theme}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
