import { useEffect, useState } from 'react'

function Calender(){
    const [races, setRaces ]  = useState([])

    useEffect(()=> {
        fetch('https://api.jolpi.ca/ergast/f1/2026/races.json')
        .then((res) => res.json())
        .then((data)=> {
            const list = data.MRData.RaceTable.Races
            setRaces(list)
        })
    }, [])

    return(
        <div>
            <h1 className="text-3xl font-bold mb-6">2026 Race Calender</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-red-600 text-white">
                        <th className="py-3 px-4 text-left">라운드</th>
                        <th className="py-3 px-4 text-left">레이스 이름</th>
                        <th className="py-3 px-4 text-left">나라</th>
                        <th className="py-3 px-4 text-left">레이스 날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {races.map((item, index) => (
                        <tr key={item.round}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                            <td className="py-3 px-4">{item.round}</td>
                            <td className="py-3 px-4">{item.raceName}</td>
                            <td className="py-3 px-4">{item.Circuit.Location.country}</td>
                            <td className="py-3 px-4">{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Calender;