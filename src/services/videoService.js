import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://onsktezckpxxwymnuutr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uc2t0ZXpja3B4eHd5bW51dXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTUwNTUsImV4cCI6MTk4Mzk3MTA1NX0.oleFvhLNQ47COVpynZEgfPbj1akAhsEDDgFJeNVz_R0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}