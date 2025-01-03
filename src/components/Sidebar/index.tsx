import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SidebarLinkGroup from './SidebarLinkGroup';
import Logo from '/logo.png';
import { FaChevronDown, FaPlus, FaChevronUp, FaSignOutAlt, FaEye, FaPencilAlt } from 'react-icons/fa';
import { TbPresentationAnalytics } from "react-icons/tb";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const navItems = [
  {
    title: 'MENU',
    items: [
      {
        label: 'Dashboard',
        icon: TbPresentationAnalytics,
        path: '/',
        subItems: [
          { label: 'Analyst', icon: TbPresentationAnalytics, path: '/' },
        ],
      },
      { label: 'Create Leads', icon: FaPlus, path: '/create-leads' },
      { label: 'View Leads', icon: FaEye, path: '/view-leads' },
      { label: 'Edit Leads', icon: FaPencilAlt, path: '/edit-leads' },
      { label: 'Sign In', icon: FaSignOutAlt, path: '/auth/signin' },
      { label: 'Sign Up', icon: FaSignOutAlt, path: '/auth/signup' },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#fff] duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex items-center justify-between gap-2 px-6 pt-5.5 lg:pt-6.5">
        <NavLink to="/">
          <img src={Logo} className='h-12' alt="Logo" />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-lightblue"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-3 py-4 lg:mt-2 border-t-2 border-lightblue">
          {navItems.map((section, index) => (
            <div key={index}>
              <ul className="mb-6 flex flex-col gap-1.5">
                {section.items.map((item, idx) => (
                  item.subItems ? (
                    <SidebarLinkGroup
                      key={idx}
                      activeCondition={pathname === item.path || pathname.includes(item.path)}
                    >
                      {(handleClick, open) => (
                        <React.Fragment>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <NavLink
                              to="#"
                              className={`group relative flex items-center gap-2.5 lg:text-xl sm:text-xs sm:px-3 sm:py-1.5 px-4 py-2 font-medium bg-lightblue text-whiter duration-300 ease-in-out hover:bg-lightblue hover:text-whiter ${(pathname === item.path || pathname.includes(item.path)) && 'bg-lightblue text-whiter'}`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                              }}
                            >
                              <item.icon className="lg:text-xl sm:text-xs" />
                              {item.label}
                              {open ? <FaChevronUp className="lg:text-xl sm:text-xs absolute right-4 top-1/2 -translate-y-1/2" /> : <FaChevronDown className="lg:text-xl sm:text-xs absolute right-4 top-1/2 -translate-y-1/2" />}
                            </NavLink>
                          </motion.div>
                          <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                            <ul className="mt-4 flex flex-col gap-2.5">
                              {item.subItems.map((subItem, subIdx) => (
                                <li key={subIdx}>
                                  <NavLink
                                    to={subItem.path}
                                    className={({ isActive }) =>
                                      'group relative flex items-center lg:text-xl sm:text-xs gap-2.5 py-2 sm:py-1.5 px-4 sm:px-3 font-medium text-lightblue duration-300 ease-in-out hover:text-whiter hover:bg-lightblue ' +
                                      (isActive && '!bg-lightblue text-whiter')
                                    }
                                  >
                                    <item.icon className="lg:text-xl sm:text-xs" />
                                    {subItem.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </React.Fragment>
                      )}
                    </SidebarLinkGroup>
                  ) : (
                    <motion.li
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <NavLink
                        to={item.path}
                        className={`group relative flex lg:text-xl sm:text-xs my-2 items-center gap-2.5 rounded-sm lg:py-2 sm:py-1.5 px-4 sm:px-3 font-medium text-lightblue duration-300 ease-in-out hover:bg-lightblue hover:text-whiter ${pathname.includes(item.path) && 'text-whiter bg-lightblue'}`}
                      >
                        <item.icon className="lg:text-xl sm:text-xs" />
                        {item.label}
                      </NavLink>
                    </motion.li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
