import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { FaBloggerB } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Collapsible from "./Collapsible";
import { uiActions } from "../store/slices/uiSlice";
import { AiOutlineClose } from "react-icons/ai";

const sidebarData = [
  {
    isTitle: true,
    title: "Dashboard",
    link: "/",
  },
  {
    isTitle: false,
    title: "Projects",
    icon: GoProjectSymlink,
    baseLink: "project",
    sub: [
      {
        title: "Our Projects",
        link: "our_projects",
      },
      {
        title: "Add New Projects",
        link: "new_projects",
      },
      {
        title: "Create Amenity",
        link: "new_amenity",
      },
      {
        title: "Manage Amenity",
        link: "manage_amenity",
      },
      {
        title: "Add Highlights",
        link: "amenity_highlights",
      },
    ],
  },
  {
    isTitle: false,
    title: "Contact",
    icon: RiContactsBook2Line,
    baseLink: "contact",
    sub: [
      {
        title: "Enquiry List",
        link: "enquiry",
      },
    ],
  },
  {
    isTitle: false,
    title: "Gallery",
    icon: MdOutlinePhotoCamera,
    baseLink: "gallery",
    sub: [
      {
        title: "Add Gallery",
        link: "add_gallery",
      },
      {
        title: "Manage Gallery",
        link: "manage_gallery",
      },
    ],
  },
  {
    isTitle: false,
    title: "Testimonials",
    icon: BsFillPeopleFill,
    baseLink: "testimonial",
    sub: [
      {
        title: "Add Testimonial",
        link: "new_testimonial",
      },
      {
        title: "Manage Testimonials",
        link: "manage_testimonials",
      },
    ],
  },
  {
    isTitle: false,
    title: "Blogs",
    icon: FaBloggerB,
    baseLink: "blogs",
    sub: [
      {
        title: "Add Blog",
        link: "add_blog",
      },
      {
        title: "Manage Blogs",
        link: "manage_Blogs",
      },
    ],
  },
];

const normalStyle =
  "bg-white text-[#253985] rounded-xl px-[16px] py-[11.2px] flex items-center gap-4";

const activeStyle =
  "bg-[#435ebe] text-white rounded-xl px-[16px] py-[11.2px] flex items-center gap-4";

const activeHandler = ({ isActive }: any) => {
  return isActive ? activeStyle : normalStyle;
};

const Sidebar = () => {
  const isOpen = useSelector((state: any) => state.ui.showSidebar);
  const dispatch = useDispatch();

  const closeSidebarHandler = () => {
    dispatch(uiActions.toggleSidebar());
  };

  return (
    <>
      <section
        className={`bg-[#fff] shadow-lg h-[100%] sidebar fixed top-0 w-[300px] left-0 ${
          isOpen ? "left-0" : "left-[-100%]"
        } lg:relative lg:left-0 transition-all ease-in-out w-[300px] duration-800 z-20`}
      >
        <header className="px-[32px] pt-[52px] pb-[16px] flex justify-between items-center relative">
          <div
            className="absolute top-9 right-7 text-black cursor-pointer "
            onClick={closeSidebarHandler}
          >
            <AiOutlineClose className="text-[27px] lg:hidden" />
          </div>
          <img
            src="/images/logogold.png"
            alt="Brand Logo for Golden Woods"
            className="h-32 object-contain"
          />
        </header>
        <section className="mt-[32px] pb-[16px] px-[32px] text-[#25396f]  font-semibold">
          <h2 className="px-[16px] mt-[24px] mb-[16px]">Menu</h2>
          <ul className="flex flex-col gap-2">
            {sidebarData.map((item) => {
              if (item.isTitle) {
                return (
                  <NavLink to="" key={item.title} className={activeHandler}>
                    <RxDashboard />
                    <span>{item.title}</span>
                  </NavLink>
                );
              } else {
                return <Collapsible key={item.title} data={item} />;
              }
            })}
          </ul>
        </section>
      </section>
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-25 bg-black z-1"></div>
      )}
    </>
  );
};

export default Sidebar;
