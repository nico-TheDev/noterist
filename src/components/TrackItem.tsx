import React from "react";

const TrackItem: React.FC<{ song: any }> = (song) => {
    const handleClick = () => {};

    return (
        <li
            className="bg-gray-900 py-4 px-8 hover:bg-gray-700 cursor-pointer"
            onClick={handleClick}
        >
            <h4 className="text-lg font-semibold">{song?.track_name}</h4>
            <p className="text-sm text-gray-400">{song?.artist_name}</p>
        </li>
    );
};

export default TrackItem;
