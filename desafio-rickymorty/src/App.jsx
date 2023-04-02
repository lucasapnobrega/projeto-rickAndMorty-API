import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  /* PARTE DA GALERIA  */
  const [characters, setCharacters] = useState([]);

  async function fetchData() {
    const data = await fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));

    setCharacters(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  /* PARTE DOS EPISÓDIOS */
  const [episodios, setEpisodios] = useState([]);

  async function fetchDataEpisodio() {
    const dataa = await fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((dataa) => setEpisodios(dataa.results));

      setEpisodios(dataa.results);

  }

  useEffect(() => {
    fetchDataEpisodio();
  }, []);

  console.log(fetchDataEpisodio);


  return (
    <>
      <Header />

      <Main />

      {/* PARTE DA GALERIA */}

      <h1 className="title">Galeria dos personagens</h1>

      <div className="container cards-all">
        {characters.map((character) => {
          return (
            <article className="article-card">
              <p>
                <img src={character.image} alt="" />
              </p>

              <p>
                <span className="bold-card">{character.name}</span>
              </p>

              <p>
                <span>Status:</span> {character.status}
              </p>

              <p>
                <span>Espécie:</span> {character.species}
              </p>

              <p>
                <span>Localização:</span> {character.location.name}
              </p>

              <p>
                <span>Gênero:</span> {character.gender}
              </p>
            </article>
          );
        })}
      </div>

      {/* PARTE DOS EPISODIOS */}
      <div className="bg-main" id='episodios'>
        <h1 className="title-episodios">Episódios</h1>
        <div className="container episodios-card">
          {episodios.map((episodio) => {
            return (
              <article className="article-card-episodios">
                <p>
                  <span className="bold-card">Nome: {episodio.name}</span>{" "}
                </p>

                <p>
                  <span className="green">Data: {episodio.air_date}</span>
                </p>

                <p>Temporada e Episódio: {episodio.episode}</p>
              </article>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App
