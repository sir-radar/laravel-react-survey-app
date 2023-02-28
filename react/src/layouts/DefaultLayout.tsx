import { NavLink, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function DefaultLayout() {
  return (
    <>
      <div className="min-h-full">
        <Nav />
        <Outlet />
      </div>
    </>
  );
}
