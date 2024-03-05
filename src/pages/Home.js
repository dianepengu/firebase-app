import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
    return (
        <div className="flex w-full h-full gap-5">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold dark:text-black">All Recipes</h1>
                <p className="text-md dark:text-gray-400">Recipes that you have saved</p>
            </div>
        </div>
    )
}