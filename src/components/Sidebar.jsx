import { Outlet, Link } from 'react-router-dom';

import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function Sidebar() {
    return (
        <aside id='default-sidebar' className="w-64 min-wid-full h-screen aria-label='Sidebar'">
            <div className='h-full px-3 py-4 overflow-y-auto'>
                <ul className='flex flex-col gap-3 font-medium'>
                    <li>
                        <div className="flex p-2 justify-start items-center">
                            <span className="ms-3 font-semibold">Logo</span>
                        </div>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <div className="flex p-2 justify-start items-center hover:bg-slate-100 rounded-lg">
                                <IoHomeOutline size={24} />
                                <span className="ms-3 font-semibold">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/explore'}>
                            <div className="flex p-2 justify-start items-center hover:bg-slate-100 rounded-lg">
                                <MdOutlineExplore size={24} />
                                <span className="ms-3 font-semibold">Explore</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/favorites'}>
                            <div className="flex p-2 justify-start items-center hover:bg-slate-100 rounded-lg">
                                <FaRegHeart size={24} />
                                <span className="ms-3 font-semibold">Favorites</span>
                            </div>
                        </Link>
                    </li>
                    <li className='order-last'>
                        <Link to={'/login'}>
                            <div className="flex p-2 justify-start items-center hover:bg-slate-100 rounded-lg">
                                <IoIosLogIn size={24} />
                                <span className="ms-3 font-semibold">Login</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </aside>
    )
}