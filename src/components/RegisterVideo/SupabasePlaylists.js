import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function SupabasePlaylists() {
    const PROJECT_URL = "https://onsktezckpxxwymnuutr.supabase.co";
    const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uc2t0ZXpja3B4eHd5bW51dXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTUwNTUsImV4cCI6MTk4Mzk3MTA1NX0.oleFvhLNQ47COVpynZEgfPbj1akAhsEDDgFJeNVz_R0";
    const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const lista = [];
        supabase
            .from("video")
            .select("playlist")
            .then((element) => {
                element.data
                    .forEach((x) => {
                        lista.push(x.playlist)
                    })
                setPlaylists([...new Set(lista)]);
            });
    }, []);
    return (
        playlists
            .filter(
                (element) => element != "Imersão React"
            )
            .map((element) =>
                <option key={element} value={element} name={element}>
                    {element}
                </option>
            )
    )
}