import React from "react";
import TrackItem from "./TrackItem";
interface Track {
    track_id: number;
    track_name: string;
    artist_name: string;
}
interface Props {
    songList: null | Array<Track>;
    setCurrentSong?: any;
}

const TrackResult: React.FC<Props> = ({ songList, setCurrentSong }) => {
    return (
        <ul className="bg-gray-800 h-full grid gap-2 content-start rounded-lg px-4 py-8 overflow-auto">
            <h2 className="text-lg font-semibold text-center mb-2">
                🔍 SEARCH RESULT
            </h2>
            {songList?.map((song) => (
                <TrackItem song={song} key={song.track_id} setCurrentSong={setCurrentSong}/>
            ))}
        </ul>
    );
};

export default TrackResult;
