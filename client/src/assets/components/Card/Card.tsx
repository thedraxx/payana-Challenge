
import { AiFillStar } from 'react-icons/ai'
import instance from '../../../fetch/axios'
import { useEffect, useState } from 'react'
import { DataPayanaDB } from '../../../interface/dataPayanaDB.interface'

const Card = () => {

    const [allDataDB, setAllDataDB] = useState<DataPayanaDB[]>([]);
    const [pagination, setPagination] = useState(0);

    useEffect(() => {
        getDataFromPayanaDB()
    }, [])

    const getDataFromPayanaDB = async () => {
        try {
            const { data } = await instance.get('/payana-db')
            setAllDataDB(data)
        } catch (error) {
            console.log(error)
        }
    }

    const changeValoration = async (id: string, valoracion: number) => {
        const url = `http://localhost:3000/payana-db/${id}`

        const data = {
            valoracion: valoracion
        }

        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', // Asegúrate de que el tipo de contenido sea correcto
                // Otras cabeceras si es necesario
            },
            body: JSON.stringify(data), // Convierte el objeto de datos a JSON
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('HTTP error, status = ' + response.status);
            }

            setPagination(pagination + 1)

            if (pagination < allDataDB.length - 1) {
                setPagination(pagination + 1)
            } else {
                setPagination(0)
            }

        } catch (error) {
            console.log(error)
            return;
        }
    }

    return (


        allDataDB.length < 1 ? <p>Loading...</p> :

            <div className="bg-white p-4 shadow-lg rounded-lg" >
                <div className="w-100 h-100">
                    <img
                        src="https://picsum.photos/400/400"
                        alt="Card Image"
                        className="w-full h-full rounded-t-lg object-cover"
                    />
                </div>


                <div className="p-4">
                    <h2 className="text-xl font-semibold">Payana Challenge made in React and Nest.js</h2>
                    <p className="text-gray-600 text-2xl">{allDataDB[pagination].texto}</p>
                    <div
                        className="flex justify-center items-center mt-4"
                    >

                        <button
                            className="mt-2 bg-slate-400 hover:bg-slate-500 text-white p-4 rounded-full transition-all 0.5s ease-in-out mr-3"
                            onClick={() => changeValoration(allDataDB[pagination]._id, 1)}
                        >
                            <AiFillStar />
                        </button>
                        <button
                            className="mt-2 bg-slate-400 hover:bg-slate-500 text-white p-4 rounded-full transition-all 0.5s ease-in-out mr-3"
                            onClick={() => changeValoration(allDataDB[pagination]._id, 2)}
                        >
                            <AiFillStar />
                        </button>
                        <button
                            className="mt-2 bg-slate-400 hover:bg-slate-500 text-white p-4 rounded-full transition-all 0.5s ease-in-out mr-3"
                            onClick={() => changeValoration(allDataDB[pagination]._id, 3)}
                        >
                            <AiFillStar />
                        </button>
                        <button
                            className="mt-2 bg-slate-400 hover:bg-slate-500 text-white p-4 rounded-full transition-all 0.5s ease-in-out mr-3"
                            onClick={() => changeValoration(allDataDB[pagination]._id, 4)}
                        >
                            <AiFillStar />
                        </button>
                        <button
                            className="mt-2 bg-slate-400 hover:bg-slate-500 text-white p-4  rounded-full transition-all 0.5s ease-in-out mr-3"
                            onClick={() => changeValoration(allDataDB[pagination]._id, 5)}
                        >
                            <AiFillStar />
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Card