import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout() {
  return (
    <div>
      <Header />

      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
