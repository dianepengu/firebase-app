import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export default function RecipePage() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getDoc(doc(db, "recipes", id))
            .then((sn) => {
                setRecipe(sn.data());
            })
    }, []);

    return (
        <div className="flex flex-col w-full h-full gap-5">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold dark:text-black">{recipe.name}</h1>
                <p className="text-md dark:text-gray-400">{recipe.description}</p>
            </div>
            <div className="w-full">
                <img
                    className="w-1/2 aspect-video rounded-md shadow-lg"
                    src={recipe.picURL}
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold dark:text-black">Ingredients</h1>
                
            </div>
        </div>
    )
}