import React, { useState } from "react";

import Search from "./components/Search";
import TrackResult from "./components/TrackResult";
import LyricsBody from "./components/LyricsBody";
interface Track {
    track_id: number;
    track_name: string;
    artist_name: string;
}
interface Song {
    track_name: string;
    artist_name: string;
    lyrics_id: number;
    lyrics_body: string;
}

const App: React.FC<{}> = () => {
    const [songList, setSongList] = useState<null | Track[]>(null);
    const [currentSong, setCurrentSong] = useState<null | Song>(null);

    return (
        <div className="bg-gray-900 h-screen text-white p-10 font-main">
            <h1 className="text-3xl text-center">
                Noterist🎵
                <span className="block mt-2 text-lg">
                    Search for Music, We give lyrics
                </span>
            </h1>

            <Search setSongList={setSongList} />

            <div className="grid grid-cols-4 gap-4 h-60">
                <TrackResult
                    setCurrentSong={setCurrentSong}
                    songList={songList}
                />
                <LyricsBody details={currentSong}/>
            </div>
        </div>
    );
};

export default App;
