import {useEffect, useState} from "react";

type Track = {
    name: string;
    external_urls: {
        spotify: string;
    }
}

async function fetchWebApi(token: string, endpoint: string, method: "GET", body: any) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body)
    });
    return await res.json();
}

async function getTopTracks(fetchWebApi: Function, token: string) {
    return (await fetchWebApi(
        token,
        'v1/me/top/tracks?time_range=long_term&limit=50', 'GET'
    )).items;
}

const Spotify = () => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        async function getTracks() {
            const topTracks: Track[] = await getTopTracks(fetchWebApi, process.env.REACT_APP_SPOTIFY || "");
            const tracks = topTracks.map(track => ({
                name: track.name,
                external_urls: track.external_urls
            }));
            setTracks(tracks);
        }


        getTracks();
    }, []);


    return <div>
        {
            tracks.map((track) =>
                <li>
                    <a target="__blank" href={track.external_urls.spotify}> {track.name} </a>
                </li>
            )
        }
    </div>
}

export default Spotify;