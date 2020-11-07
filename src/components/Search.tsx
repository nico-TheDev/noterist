import React, { useState } from "react";
import getIcon from "../utils/getIcon";

interface Props {
    setSongList: any;
}

const Search: React.FC<Props> = ({ setSongList }) => {
    const [input, setInput] = useState<string>("");

    const handleSubmit: (e: any) => void = async (e) => {
        e.preventDefault();
        const res = await fetch(
            `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_API}/track.search?apikey=${process.env.REACT_APP_KEY}&q_track=${input}`
        );
        const data = await res.json();
        console.log(data);
        const trackList = data.message.body.track_list.map(
            (item: { track: object }) => item.track
        );

        console.log(trackList);
        setSongList(trackList);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex justify-center my-8 border border-gray-100 rounded-lg items-center"
        >
            <svg className="w-6 h-6 inline-block fill-current m-2">
                <use href={getIcon("search")} />
            </svg>
            <input
                type="text"
                name="query"
                id="query"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Search for Song.."
                className="py-4 h-full text-lg bg-transparent flex-1 outline-none"
            />
        </form>
    );
};

export default Search;
