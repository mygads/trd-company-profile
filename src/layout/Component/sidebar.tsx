import { useEffect, useRef, useState } from 'react';
import { NavLink} from 'react-router-dom';

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const Sidebar : React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const trigger = useRef<HTMLButtonElement>(null);
    const sidebar = useRef<HTMLDivElement>(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );
    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
        if (!sidebar.current || !trigger.current) return;
        if (
            !sidebarOpen ||
            sidebar.current.contains(target as Node) ||
            trigger.current.contains(target as Node)
        )
            return;
        setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
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
        className={`absolute left-0 top-0 z-50 flex h-screen w-65 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 shadow-md ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 mx-auto px-6 py-5.5 lg:py-6.5">

            <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
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
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            {/* <!-- Sidebar Menu --> */}
            <nav className="mt-2 py-4 px-4 lg:mt-2 lg:px-6">
            
                <ul className="flex flex-col gap-2"></ul>
                    <li>
                        <NavLink
                            to="/home"
                            className="flex items-center gap-2 py-2 pl-3 pr-4 text-sm font-semibold text-gray-600 rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-boxdark"
                        >
                            <span className="text-2xl">🏠</span>
                            Dashboard
                        </NavLink>
                    </li>
            </nav>
            {/* <!-- Sidebar Menu --> */}
        </div>
        </aside>
    );
};

export default Sidebar;