export default async function DriversPage() {
  const res = await fetch("https://api.jolpi.ca/ergast/f1/current/driverstandings/");
  const data = await res.json();
  const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

  return (
    <main>
      <h1>드라이버 스탠딩</h1>
      <ol>
        {standings.map((s: any) => (
          <li key={s.Driver.driverId}>
            {s.Driver.familyName} - {s.points}점
          </li>
        ))}
      </ol>
    </main>
  );
}