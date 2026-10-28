export default async function ConstructorsPage() {
    const res = await fetch("https://api.jolpi.ca/ergast/f1/current/constructorstandings/");
    const data = await res.json();
    const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;

    return (
        <main>
            <h1>컨스트럭터 스탠딩</h1>
            <ol>
                {standings.map((s: any) => (
                    <li key={s.Constructor.constructorId}>
                        {s.Constructor.name} - {s.points}점
                    </li>
                ))}
            </ol>
        </main>
    );
}