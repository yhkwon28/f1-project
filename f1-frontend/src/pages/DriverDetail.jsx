import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {getDriverPhoto} from '../api/wikipedia';

function DriverDetail() {
    const {driverId} = useParams();
    const [driver, setDriver] = useState(null);
    const [result, setResult] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        fetch(`https://api.jolpi.ca/ergast/f1/drivers/${driverId}.json`)
            .then((res) => res.json())
            .then((data) => {
                setDriver(data.MRData.DriverTable.Drivers[0]);
                setDriver(d);
                getDriverPhoto(d.givenName, d.familyName).then(setPhotoUrl);
            });

        fetch(`https://api.jolpi.ca/ergast/f1/2026/drivers/${driverId}/results.json`)
            .then((res) => res.json())
            .then((data) => {
                setResult(data.MRData.RaceTable.Races);
            }, [driverId]);
    }, [driverId]);

    if (!driver || !result) return <div>불러오는 중...</div>;

    return (
        <div className="p-6">
            <Link to="/drivers" className="text-red-600 hover:underline mb-4 inline-block">
                드라이버 목록으로
            </Link>

            <div className="flex gap-6 items-center mb-8">
                <img
                    src={photoUrl ?? `/drivers/default.jpg`}
                    alt={`${driver.givenName} ${driver.familyName}`}
                    className="w-32 h-32 rounded-full object-cover bg-gray-200"
                    onError={(e) => {e.target.src = '/drivers/default.jpg';}}
                /> 
                <div>
                    <h1 className="text-3xl font-bold">{driver.givenName} {driver.familyName}</h1>
                    <p className="text-gray-600">{driver.nationality}</p>
                    <p className="text-gray-600">생년월일: {driver.dateOfBirth}</p>
                    {driver.permanentNumber && <p className="text-gray-600">등번호: {driver.permanentNumber}</p>}
                </div>
            </div>
            
            <h2 className="text-xl font-bold mb-3">2026 시즌 결과</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-red-600 text-white">
                        <th className="py-2 px-4 text-left">레이스</th>
                        <th className="py-2 px-4 text-left">순위</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((race, i) => (
                        <tr key={race.round} className={i % 2 === 0 ? 'bg-white': 'bg-gray-100'}>
                            <td className="py-2 px-4">{race.raceName}</td>
                            <td className="py-2 px-4">{race.Results[0].position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DriverDetail;
