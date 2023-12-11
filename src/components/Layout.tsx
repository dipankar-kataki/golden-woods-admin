import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { uiActions } from "../store/slices/uiSlice";
import { useDispatch } from "react-redux";

const Layout = () => {
  const dispatch = useDispatch();

  const sidebarActiveHandler = () => {
    dispatch(uiActions.toggleSidebar());
  };

  return (
    <>
      <main className="flex gap-1">
        <Sidebar />
        <section className="w-full h-screen mx-6 md:mx-8 ">
          <article className="bg-white flex justify-between px-8 py-6 mt-4 rounded-xl items-center shadow-lg">
            <div
              className="cursor-pointer lg:hidden "
              onClick={sidebarActiveHandler}
            >
              <GiHamburgerMenu size={20} className="text-black-500" />
            </div>
            <h2 className="text-[#2a2d32] font-bold font-sans">Golden woods</h2>
            <img
              className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-200 bg-white dark:ring-gray-300"
              src="/images/admin.png"
              alt="Bordered avatar"
            />
          </article>
          <section className="h-full rounded-xl mt-8  w-full ">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

export default Layout;
