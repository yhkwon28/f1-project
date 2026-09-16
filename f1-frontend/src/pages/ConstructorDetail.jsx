import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";

function ConstructorDetail() {
    const {constructorId} = useParams();
    const [constructor, setConstructor] = useState(null);
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetch(`https://api.jolpi.ca/ergast/f1/constructors/${constructorId}.json`)
            .then((res) => res.json())
            .then((data) => {
                setConstructor(data.MRData.ConstructorTable.Constructors[0]);
            });

        fetch(`https://api.jolpi.ca/ergast/f1/constructors/${constructorId}/drivers.json`)
            .then((res) => res.json())
            .then((data) => {
                setDrivers(data.MRData.DriverTable.Drivers);
            });
    }, [constructorId]);

    if(!constructor) return <div className="p-6">불러오는 중...</div>;

    return (
        <div className="p-6">
            <Link to="/constructors" className="text-red-600 hover:underline mb-4 inline-block">
                컨스트럭터 목록으로
            </Link>

            <h1 className="text-3xl font-bold mb-4">{constructor.name}</h1>
            <p className="text-gray-600 mb-4">{constructor.nationality}</p>

            <h2 className="text-xl font-bold mb-3">소속 드라이버</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {drivers.map((driver) => (
                    <Link
                        key={driver.driverId}
                        to={`/drivers/${driver.driverId}`}
                        className="flex flex-col items-center bg-gray-100 rounded-lg p-4 hover:scale-105 transition">
                            <img
                                src={`/drivers/${driver.driverId}.jpg`}
                                alt={`${driver.givenName} ${driver.familyName}`}
                                className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-3
                                onError={(e) => {e.target.src = '/drivers/default.jpg';}}"    
                            />
                            <p className="font-medium text-center">{driver.givenName} {driver.familyName}</p>
                    </Link>                        
                    ))}
            </div>
        </div>
    );
}

export default ConstructorDetail;