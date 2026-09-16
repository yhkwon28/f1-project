import { useEffect, useState } from 'react';
import CircuitSlider from '../components/Circuitslider';

function Home() {
    const [leader, setLeader] = useState(null);
    const [nextRace, setNextRace] = useState(null);

    useEffect(() => {
        fetch('https://api.jolpi.ca/ergast/f1/2026/races.json')
            .then((res) => res.json())
            .then((data) => {
                const races = data.MRData.RaceTable.Races;
                const today = new Date();
                const upcoming = races.find((race) => new Date(race.date) >= today);
                setNextRace(upcoming ?? races[races.length - 1]);
            });

        fetch('https://api.jolpi.ca/ergast/f1/2026/driverstandings.json')
            .then((res) => res.json())
            .then((data) => {
                const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setLeader(standings[0].Driver);
            });
    }, []);

    if (!leader || !nextRace) {
        return <div className="p-6">불러오는 중...</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">2026 F1</h1>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-red-600 text-white">
                        <th className="py-3 px-4 text-left">현재 1위 드라이버</th>
                        <th className="py-3 px-4 text-left">다음 레이스</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="py-3 px-4 font-medium">
                            {leader.givenName} {leader.familyName}
                        </td>
                        <td className="py-3 px-4">{nextRace.raceName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;