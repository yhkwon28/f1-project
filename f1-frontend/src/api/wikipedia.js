// src/api/wikipedia.js
const cache = new Map();

async function findWikiTitle(givenName, familyName) {
    const query = `${givenName} ${familyName} Formula One driver`;
    const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`
    );
    const data = await res.json();
    return data.query?.search?.[0]?.title ?? null;
}

export async function getDriverPhoto(givenName, familyName) {
    const key = `${givenName} ${familyName}`;
    if (cache.has(key)) return cache.get(key);

    try {
        const title = await findWikiTitle(givenName, familyName);
        if (!title) throw new Error('no match');

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