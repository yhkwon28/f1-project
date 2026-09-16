import { useEffect, useState } from 'react'
import CircuitSlider from '../components/Circuitslider'

function Circuits(){
    const [circuits, setCircuits] = useState([])

    useEffect(()=> {
        fetch('https://api.jolpi.ca/ergast/f1/2026/circuits.json')
        .then((res) => res.json())
        .then((data) => {
            const list = data.MRData.CircuitTable.Circuits
            setCircuits(list)
        })
    }, [])

    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">2026 Circuit List</h1>

            {/* 서킷 슬라이더 */}
            <div className="mb-8">
                <CircuitSlider />
            </div>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-red-600 text-white">
                        <th className="py-3 px-4 text-left">서킷 이름</th>
                        <th className="py-3 px-4 text-left">나라</th>
                        <th className="py-3 px-4 text-left">위치</th>
                    </tr>
                </thead>
                <tbody>
                    {circuits.map((item, index) => (
                        <tr key={item.circuitId}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                            <td className="py-3 px-4">{item.circuitName}</td>
                            <td className="py-3 px-4">{item.Location.country}</td>
                            <td className="py-3 px-4">{item.Location.locality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Circuits;