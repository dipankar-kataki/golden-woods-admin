import { useState, useEffect } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";

interface subLinks {
  link: string;
  title: string;
  icon: any;
  baseLink: string;
}

const Collapsible = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const collapsibleClass = isOpen
    ? "collapsible collapsible--expanded"
    : "collapsible";

  const { data } = props;

  const collapsibleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const isNavLinkActive = data.sub.some(({ link }: subLinks) =>
    location.pathname.match(`${data.baseLink}/${link}`)
  );

  const parentStyle = isNavLinkActive
    ? "bg-[#435ebe] text-white rounded-xl px-[16px] py-[11.2px] flex items-center gap-4 justify-between cursor-pointer"
    : "bg-white text-[#253985] rounded-xl px-[16px] py-[11.2px] flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f0f1f5]";

  useEffect(() => {
    if (!location.pathname.startsWith(`/${data.baseLink}`)) {
      setIsOpen(false);
    }
  }, [location.pathname, data.baseLink]);

  return (
    <>
      <div className={parentStyle} onClick={collapsibleHandler}>
        <div className="flex gap-4 items-center">
          <data.icon />
          <span>{data.title}</span>
        </div>
        <BiSolidChevronRight className="text-zinc-400 chevron" />
      </div>
      <ul
        className={`flex flex-col rounded-xl text-left bg-slate-600 text-white ${collapsibleClass} gap-[1/2]`}
      >
        {data.sub.map(({ link, title }: subLinks) => {
          const isActive = location.pathname.match(`${data.baseLink}/${link}`);
          return (
            <React.Fragment key={title}>
              {isActive ? (
                <li className="bg-[#f0f1f5] text-black rounded px-[16px] py-[4.5px] mx-4 ">
                  {title}
                </li>
              ) : (
                <li className="bg-slate-600 text-white rounded  py-[4.5px]">
                  <NavLink
                    to={`${data.baseLink}/${link}`}
                    className="rounded block px-[16px] py-[4.5px] mx-4 hover:bg-white hover:text-black "
                  >
                    {title}
                  </NavLink>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default Collapsible;
