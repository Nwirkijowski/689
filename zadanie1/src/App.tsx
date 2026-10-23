 import React from "react";
 import { useState } from "react";
 import "bootstrap/dist/css/bootstrap.min.css";

// ZADANIA ZROBIONE Z POPRZEDNIEJ LEKCJI (KONCZYLEM PRZY PANA BIORKU) ZADANIA Z AKTUALNEJ LEKCJI NIE ZDAZYLEM
interface MovieProps {
  posterUrl: string;
  title: string;
  releaseYear: number;
  rating: number;
}

function Movie(props: MovieProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.posterUrl} />
      <h2>{props.title}</h2>
      <span>{props.releaseYear}</span>
      {props.rating >= 8 && <p>Polecany</p>}
    </div>
  );
}

interface BookProps {
  coverUrl: string;
  title: string;
  releaseYear: number;
  numPages: number;
}

function Book(props: BookProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.coverUrl} />
      <h2>{props.title}</h2>
      <span>{props.releaseYear} </span>
      &bull; 
      {/* kropka */}
      <span> {props.numPages ?? 0} stron</span>
      {props.releaseYear < 2000 && <p>Klasyka</p>}
    </div>
  );
}

interface TrackProps {
  index: number;
  title: string;
  length: string;
}

function Track(props: TrackProps) {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.title}</td>
      <td>{props.length}</td>
    </tr>
  );
}

interface AlbumProps {
  coverUrl: string;
  title: string;
  band: string;
  genre: string;
  releaseYear: number;
  tracks: TrackProps[];
}

function Album(props: AlbumProps) {
  let listaUtworow = <p>Brak utworów</p>;

  if (props.tracks.length > 0) {
    listaUtworow = (
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>L.p.</th>
            <th>Tytuł</th>
            <th>Czas trwania</th>
          </tr>
        </thead>
        <tbody>
          {props.tracks.map((track) => (
            <Track
              key={track.index}
              index={track.index}
              title={track.title}
              length={track.length}
            />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <img style={{ height: 375 }} src={props.coverUrl} />
      <h2>{props.title}</h2>
      <span>{props.band} </span> &bull;
      <span>{props.releaseYear} </span> &bull;
      <span>{props.genre}</span>
      {listaUtworow}
    </div>
  );
}

function App() {

  const [FilmyOpen, setFilmyOpen] = useState("true");
  const [KsiazkiOpen, setKsiazkiOpen] = useState("true");
  const [AlbumOpen, setAlbumOpen] = useState("true");

  const movies: MovieProps[] = [
    { releaseYear: 1999, title: "The Matrix", rating: 9, posterUrl: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg" },
    { releaseYear: 2014, title: "Interstellar", rating: 9, posterUrl: "https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp" },
    { releaseYear: 2003, title: "Taxi 3", rating: 6, posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/Taxi_3_film.jpg" },
    { releaseYear: 2019, title: "Joker", rating: 8, posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  ];

  const books: BookProps[] = [
        {releaseYear: 2019, numPages: 272, title: "Atomowe nawyki", coverUrl: "https://files.legimi.com/images/44263fa8e9e4caa1720c7efd30d695e6/w512_u90.jpg"},
        {releaseYear: 2012, numPages: 667, title: "Pułapki myślenia. O myśleniu szybkim i wolnym", coverUrl: "https://static.profinfo.pl/storage/image/core_products/2026/8/23/196950ec8988246ea07ed9965506dcb3/admin/preview/6999907590569.webp"},
        {releaseYear: 2025, numPages: 304, title: "Tiny experiments", coverUrl: "https://m.media-amazon.com/images/I/61rUfWyyfoL._AC_UF1000,1000_QL80_.jpg"},
        {releaseYear: 1999, numPages: 352, title: "Pragmatyczny programista", coverUrl: "https://static01.helion.com.pl/global/okladki/vbig/prag2v.jpg"}
  ];

  const albums: AlbumProps[] = [
          {releaseYear: 2005, band: "Pendulum", title: "Hold Your Colour", genre: "drum'n'bass", coverUrl: "https://muzikercdn.com/uploads/products/11924/1192412/main_70a2a6cc.jpg", 
          tracks: [
            {index: 1, title: "Prelude", length: "0:52"},
            {index: 2, title: "Slam", length: "5:44"},
            {index: 3, title: "Plasticworld", length: "6:21"},
            {index: 4, title: "Fasten Your Seatbelt", length: "6:38"},
            {index: 5, title: "Through the Loop", length: "6:13"},
            {index: 6, title: "Sounds of Life", length: "5:21"},
            {index: 7, title: "Girl in the Fire", length: "4:53"},
            {index: 8, title: "Tarantula", length: "5:31"},
            {index: 9, title: "Out Here", length: "6:07"},
            {index: 10, title: "Hold Your Colour", length: "5:28"},
            {index: 11, title: "The Terminal", length: "5:42"},
            {index: 12, title: "Streamline", length: "5:23"},
            {index: 13, title: "Another Planet", length: "7:38"},
            {index: 14, title: "Still Grey", length: "7:51"}
          ]}, 

          {releaseYear: 2003, band: "Overseer", title: "Wreckage", genre: "big beat", coverUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Overseer_-_Wreckage.jpg",
          tracks: [
            {index: 1, title: "Slayed", length: "4:47"},
            {index: 2, title: "Stompbox", length: "3:53"},
            {index: 3, title: "Supermoves", length: "4:47"},
            {index: 4, title: "Velocity Shift", length: "2:08"},
            {index: 5, title: "Horndog", length: "3:31"},
            {index: 6, title: "Meteorology", length: "5:32"},
            {index: 7, title: "Aquaplane", length: "5:14"},
            {index: 8, title: "Doomsday", length: "3:14"},
            {index: 9, title: "Basstrap", length: "4:03"},
            {index: 10, title: "Sparks", length: "6:02"},
            {index: 11, title: "Never", length: "6:36"},
            {index: 12, title: "Heligoland", length: "26:56"} 
          ]},

          {releaseYear: 2001, band: "Daft Punk", title: "Discovery", genre: "disco house", coverUrl: "https://ecsmedia.pl/c/discovery-b-iext197156812.jpg",
          tracks: [
            {index: 1, title: "One More Time", length: "5:20"},
            {index: 2, title: "Aerodynamic", length: "3:27"},
            {index: 3, title: "Digital Love", length: "4:58"},
            {index: 4, title: "Harder, Better, Faster, Stronger", length: "3:45"},
            {index: 5, title: "Crescendolls", length: "3:31"},
            {index: 6, title: "Nightvision", length: "1:44"}, 
            {index: 7, title: "Superheroes", length: "3:57"},
            {index: 8, title: "High Life", length: "3:22"},
            {index: 9, title: "Something About Us", length: "3:51"},
            {index: 10, title: "Voyager", length: "3:47"},
            {index: 11, title: "Veridis Quo", length: "5:44"},
            {index: 12, title: "Short Circuit", length: "3:26"},
            {index: 13, title: "Face to Face", length: "3:58"},
            {index: 14, title: "Too Long", length: "10:00"}
          ]}
        ]

  movies.sort((first, second) => first.title.localeCompare(second.title));  //uzylem neta do sortowania bo nie wiedzialem jak to zrobic
  books.sort((first, second) => first.title.localeCompare(second.title));
  albums.sort((first, second) => first.title.localeCompare(second.title));

  const newerMovies = movies.filter((movie) => movie.releaseYear > 2010);
  const booksByYear = books.slice();
  booksByYear.sort((first, second) => second.releaseYear - first.releaseYear);

  let albumZnajwiecejNut = albums[0];
  for (const album of albums) {
    if (album.tracks.length > albumZnajwiecejNut.tracks.length) {
      albumZnajwiecejNut = album;
    }
  }

  return (
    <div className="kontener">
      <h1 onClick={() => setFilmyOpen(!FilmyOpen)}>
        {FilmyOpen ? "▾" : "▸"} Filmy</h1>

      {FilmyOpen && (

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {movies.map((movie) => (
        <Movie
            key={movie.title}
            releaseYear={movie.releaseYear}
            title={movie.title}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
        />
        ))}
      </div>
      )}

      <h2 onClick={() => setFilmyOpen(!FilmyOpen)}>
        {FilmyOpen ? "▾" : "▸"}Filmy wydane po 2010 roku</h2>

        {FilmyOpen && (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {newerMovies.map((movie) => (
          <Movie
            key={movie.title}
            releaseYear={movie.releaseYear}
            title={movie.title}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
          />
        ))}
      </div>
        )}
      
      <h1 onClick={() => setKsiazkiOpen(!KsiazkiOpen)}>
        {KsiazkiOpen ? "▾" : "▸"}Książki</h1>

        {KsiazkiOpen && (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
      {books.map((book) => ( 
        <Book
          key={book.title}
          
          releaseYear={book.releaseYear} 
          title={book.title}
          coverUrl={book.coverUrl}
          numPages={book.numPages}
        />
      ))}
      </div>
      )}
      <h2>Książki od najnowszej</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {booksByYear.map((book) => (
          <Book
            key={book.title}
            releaseYear={book.releaseYear}
            title={book.title}
            coverUrl={book.coverUrl}
            numPages={book.numPages}
          />
        ))}
      </div>

      <h1>Albumy</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {albums.map((album) => (
          <Album
            key={album.title}
            releaseYear={album.releaseYear}
            band={album.band}
            title={album.title}
            genre={album.genre}
            coverUrl={album.coverUrl}
            tracks={album.tracks}
          />
        ))}
        
      </div>

      <h2>Album z największą liczbą utworów</h2>
      {albumZnajwiecejNut && (
        <Album
          key={albumZnajwiecejNut.title}
          releaseYear={albumZnajwiecejNut.releaseYear}
          band={albumZnajwiecejNut.band}
          title={albumZnajwiecejNut.title}
          genre={albumZnajwiecejNut.genre}
          coverUrl={albumZnajwiecejNut.coverUrl}
          tracks={albumZnajwiecejNut.tracks}
        />
      )}
    </div>
  );
}






export default App;
