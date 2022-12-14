import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import React from "react";
import { StyledRegisterVideo } from "./styles";
import SupabasePlaylists from "./SupabasePlaylists";

// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            // console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = "https://onsktezckpxxwymnuutr.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uc2t0ZXpja3B4eHd5bW51dXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTUwNTUsImV4cCI6MTk4Mzk3MTA1NX0.oleFvhLNQ47COVpynZEgfPbj1akAhsEDDgFJeNVz_R0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// GitHub Copilot: get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "", url: "" }
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    const router = useRouter();

    const [selectVisivel, setSelectVisivel] = React.useState(true);

    // console.log();

    /* 
    ## O que precisamos para o form funcionar?
    - pegar os dados, que precisam vir do stare
        - título
        - url do vídeo
    - precisamos ter um onSubmit do nosso form
    - limpar o formulário após o Submit
    */

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {/* Ternário */}
            {/* Operadores de Curto-circuito */}
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        // console.log(formCadastro.values);

                        // Contrato entre o nosso Front e o BackEnd
                        supabase
                            .from("video")
                            .insert({
                                title: formCadastro.values.titulo,
                                url: formCadastro.values.url,
                                thumb: getThumbnail(formCadastro.values.url),
                                playlist: formCadastro.values.playlist.charAt(0).toUpperCase() + formCadastro.values.playlist.slice(1),
                            })
                            .then((oqueveio) => {
                                // console.log(oqueveio);
                                router.reload()
                            })
                            .catch((err) => {
                                // console.log(err);
                            })

                        setFormVisivel(false);
                        formCadastro.clearForm();

                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>

                            {selectVisivel
                                ? (
                                    <select
                                        defaultValue={'DEFAULT'}
                                        name="playlist"
                                        onChange={formCadastro.handleChange}
                                    >
                                        <option value="DEFAULT" disabled hidden>Selecione uma playlist...</option>

                                        {/* <option value="jogos">Jogos</option> */}
                                        {/* <option value="front-end">Front-End</option> */}
                                        {/* <option value="back-end">Back-End</option> */}

                                        <option value="Imersão React" disabled>Imersão React</option>

                                        {/* <option value="Novos vídeos">Novos vídeos</option> */}

                                        <SupabasePlaylists />

                                    </select>
                                )
                                : false
                            }

                            <input
                                placeholder="...ou crie uma nova"
                                name="playlist"
                                defaultValue={formCadastro.values.playlist}
                                onChange={
                                    // () => {
                                    // setSelectVisivel(false);
                                    formCadastro.handleChange
                                    // }
                                }
                            />

                            <input
                                placeholder="Título do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                required
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <img src={
                                formCadastro.values.url ?
                                    getThumbnail(formCadastro.values.url)
                                    : null
                            } />
                            <button type="submit">
                                Adicionar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}

// [X] Falta o botão para adicionar
// [X] Modal
// -> [X] Precisamos controlar o state
// -> Formulário em si
