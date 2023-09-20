
import { AiFillStar } from 'react-icons/ai'

const Card = () => {

    return (
        <div className="bg-white p-4 shadow-lg rounded-lg">
            <img
                src="https://picsum.photos/150/150"
                alt="Card Image"
                className="w-full h-full rounded-t-lg object-fit-cover justify-center items-center   "
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold">Payana Challenge made in React and Nest.js</h2>
                <p className="text-gray-600">generic answer................</p>
                <div
                    className="flex justify-center items-center mt-4"
                >
                    <button
                        className="mt-2 bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-full transition-all 0.5s ease-in-out"
                    >
                        <AiFillStar />
                    </button>
                    <button
                        className="mt-2 bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-full transition-all 0.5s ease-in-out"
                    >
                        <AiFillStar />
                    </button>
                    <button
                        className="mt-2 bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-full transition-all 0.5s ease-in-out"
                    >
                        <AiFillStar />
                    </button>
                    <button
                        className="mt-2 bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-full transition-all 0.5s ease-in-out"
                    >
                        <AiFillStar />
                    </button>
                    <button
                        className="mt-2 bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-full transition-all 0.5s ease-in-out"
                    >
                        <AiFillStar />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card