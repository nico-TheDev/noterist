import React from "react";

interface Track {
    track_id: number;
    track_name: string;
    artist_name: string;
}

interface Props {
    song: Track | null;
}

const TrackItem: React.FC<Props> = ({ song }) => {
    return (
        song && (
            <li className="bg-gray-900 py-4 px-8 hover:bg-gray-700 cursor-pointer">
                <h4 className="text-lg font-semibold">{song.track_name}</h4>
                <p className="text-sm text-gray-400">{song.artist_name}</p>
            </li>
        )
    );
};

export default TrackItem;
