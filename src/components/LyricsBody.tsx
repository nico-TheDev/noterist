import React from "react";

interface Song {
    track_name: string;
    artist_name: string;
    lyrics_id: number;
    lyrics_body: string;
}

interface Props {
    details: Song | null;
}

const LyricsBody: React.FC<Props> = ({ details }) => {
    return (
        <textarea
            className="w-full h-full shadow-lg bg-transparent col-span-3 text-white text-center p-8"
            value={details?.lyrics_body}
            readOnly={true}
        />
    );
};

export default LyricsBody;
