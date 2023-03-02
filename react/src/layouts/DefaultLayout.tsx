import { Navigate, NavLink, Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import useAppState from "../hooks/useAppState";

export default function DefaultLayout() {
  const { user, userToken } = useAppState();
  if (!userToken) {
    return <Navigate to="/login" />;
  }
  const logout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="min-h-full">
        <Nav user={user} logout={logout} />
        <Outlet />
      </div>
    </>
  );
}
