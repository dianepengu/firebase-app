import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

import RecipeCard from '../components/RecipeCard';

export default function Explore() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes([]);
        getDocs(collection(db, "recipes"))
            .then((sn) => {
                sn.docs.forEach((doc) => {
                    setRecipes(prev => [...prev, doc.data()]);
                })
            })
    }, []);

    return (
        <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold dark:text-black">All Recipes</h1>
                <p className="text-md dark:text-gray-400">These are recipes posted by various users</p>
                <div className="flex flex-wrap w-full gap-5">
                    {recipes.map((recipe) => (
                        <RecipeCard data={recipe} />
                    ))}
                </div>
            </div>
        </div>
    )
}