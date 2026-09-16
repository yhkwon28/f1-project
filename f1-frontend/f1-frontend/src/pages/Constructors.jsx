import {useState, useEffect } from 'react'

function Constructors(){
    const [standings, setStandings ] = useState([])
    
    useEffect(()=> {
        fetch('https://api.jolpi.ca/ergast/f1/2026/constructorstandings.json')
        .then((res) => res.json())
        .then((data) =>{
            const list = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
            setStandings(list)
        })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">2026 Constructor Standings</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className='bg-red-600 text-white'>
                        <th className="py-3 px-4 text-left">순위</th>
                        <th className="py-3 px-4 text-left">팀</th>
                        <th className="py-3 px-4 text-left">포인트</th>
                        <th className="py-3 px-4 text-left">우승</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((item, index) =>(
                        <tr key={item.Constructor.constructorId}
                            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                            <td className="py-3 px-4">{item.position}</td>
                            <td className="py-3 px-4">{item.Constructor.name}</td>
                            <td className="py-3 px-4">{item.points}</td>
                            <td className="py-3 px-4">{item.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Constructors;