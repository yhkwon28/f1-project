export default async function SchedulePage() {
    const res = await fetch("https://api.jolpi.ca/ergast/f1/2026/races/");
    const data = await res.json();
    const schedule = data.MRData.RaceTable.Races;

    return (
        <main>
            <h1>2026 F1 캘린더</h1>
            <ol>
                {schedule.map((s : any) => (
                    <li key={s.round}>
                        {s.raceName} - {s.date}
                    </li>
                ))}
            </ol>
        </main>
    )
}