import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
    const [uploaded, setUploaded] = useState([]);
    
    useEffect(() => {

    }, []);

    return (
        <div className="flex flex-col w-full h-full gap-10">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold dark:text-black">Uploaded Recipes</h1>
                <p className="text-md dark:text-gray-400">Recipes that you have uploaded</p>
            </div>
        </div>
    )
}