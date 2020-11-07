import React from "react";
import TrackItem from "./TrackItem";

interface ResultProps {
    songList: null | Array<{}>;
    setCurrentSong?: any;
}

const TrackResult: React.FC<ResultProps> = ({ songList, setCurrentSong }) => {
    return (
        <ul className="bg-gray-800 h-full grid gap-2 content-start rounded-lg px-4 py-8 overflow-auto">
            <h2 className="text-lg font-semibold text-center mb-2">
                🔍 SEARCH RESULT
            </h2>
            {songList && songList.map((song) => <TrackItem />)}
        </ul>
    );
};

export default TrackResult;
