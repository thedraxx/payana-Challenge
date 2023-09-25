import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const FavStars = () => {

    for (let index = 0; index < 5; index++) {
        return (
            <button
                className="mt-2 bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-full transition-all 0.5s ease-in-out"
            >
                <AiFillStar />
            </button>
        )

    }

}

export default FavStars