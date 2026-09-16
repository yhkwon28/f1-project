import { useState, useEffect } from 'react'

function Drivers(){
    const [standings, setStandings] = useState([])

    useEffect(() => {
        fetch('https://api.jolpi.ca/ergast/f1/2026/driverstandings.json')
        .then((res) => res.json())
        .then((data) =>{
            const list = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
            setStandings(list)
        })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">2026 Driver Standing</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className='bg-red-600 text-white'>
                        <th className="py-3 px-4 text-left">순위</th>
                        <th className="py-3 px-4 text-left">드라이버</th>
                        <th className="py-3 px-4 text-left">팀</th>
                        <th className="py-3 px-4 text-left">포인트</th>
                        <th className="py-3 px-4 text-left">우승</th>
                    </tr>
                </thead>
                <tbody>
                {standings.map((item, index)=>(
                    <tr key={item.Driver.driverId}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                        <td className="py-3 px-4">{item.position}</td>
                        <td className="py-3 px-4 font-medium">{item.Driver.givenName} {item.Driver.familyName}</td>
                        <td className="py-3 px-4">{item.Constructors[0].name}</td>
                        <td className="py-3 px-4 font-bold">{item.points}</td>
                        <td className="py-3 px-4">{item.wins}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Drivers;