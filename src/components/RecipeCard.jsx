import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { FaHeart } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default function RecipeCard({ data }) {
    const [color, setColor] = useState("green");
    console.log(data)
    // switch(data.type) {
    //     case "breakfast":
    //         setColor("green");
    //         break;
    //     case "snack":
    //         setColor("orange");
    //         break;
    //     default: break;
    // }

    return (
        <div className={`flex flex-col p-3 gap-2 w-1/4 bg-${color}-200 rounded-md shadow-lg`}>
            <Link to={`/recipe/${data.id}`}>
                <div className="relative shrink w-full rounded-md">
                    <img
                        className="w-full aspect-video rounded-md"
                        src={`${data.picURL}`}
                    />
                    <div className="absolute bottom-2 left-2 flex items-center justify-center gap-1 px-2 py-1 rounded-lg bg-slate-200">
                        <IoIosTimer size={22} />
                        <p className='text-md font-semibold'>{data.prep} mins</p>
                    </div>
                </div>
                <div className="w-full grow">
                    <div className="flex">
                        <h1 className="order-first text-md font-semibold">{data.name}</h1>
                        <span className="grow"></span>
                        <div className="order-last flex gap-2 px-2 items-center">
                            <FaHeart color='#f54e42' />
                            <p className="text-md">{data.likes}</p>
                        </div>
                    </div>
                    <h1 className="text-md text-gray-400">{data.cuisine}</h1>
                </div>
            </Link>
            <Outlet />
        </div>
    )
}