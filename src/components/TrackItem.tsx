import React from "react";

interface Song {
    track_name: string;
    artist_name: string;
    lyrics_id: number;
    lyrics_body: string;
}
interface Track {
    track_id: number | null;
    track_name: string;
    artist_name: string;
}

interface Props {
    song: Track ;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song | null>>;
}

const TrackItem: React.FC<Props> = ({ song, setCurrentSong }) => {

    const handleClick: () => void = async () => {
        const res = await fetch(
            `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API}/track.lyrics.get?apikey=${process.env.REACT_APP_KEY}&track_id=${song.track_id}`
        );
        const data = await res.json();
        setCurrentSong(data.message.body.lyrics);
        console.log(data.message.body.lyrics);
    };

    return (
        song && (
            <li
                className="bg-gray-900 py-4 px-8 hover:bg-gray-700 cursor-pointer"
                onClick={handleClick}
            >
                <h4 className="text-lg font-semibold">{song.track_name}</h4>
                <p className="text-sm text-gray-400">{song.artist_name}</p>
            </li>
        )
    );
};

export default TrackItem;
