const cache = new Map();

export async function getDriverPhoto(givenName, familyName) {
    const key = `${givenName} ${familyName}`;
    if (cache.has(key)) return cache.get(key);

    const title = `${givenName}_${familyName}`;
    try {
        const res = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
        );
        if (!res.ok) throw new Error('not found');
        const data = await res.json();
        const photoUrl = data.thumbnail?.source ?? null;
        cache.set(key, photoUrl);
        return photoUrl;
    } catch (e) {
        cache.set(key, null);
        return null;
    }
}