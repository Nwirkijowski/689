import React from "react";

interface MovieProps {
  posterUrl: string;
  title: string;
  releaseYear: number;
}

function Movie(props: MovieProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.posterUrl} />
      <h2>{props.title}</h2>
      <span>{props.releaseYear}</span>
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
      <span> {props.numPages ?? 0} stron</span>
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
  children: React.ReactNode;
}

function Album(props: AlbumProps) {
  return (
    <div>
      <img style={{ height: 375 }} src={props.coverUrl} />
      <h2>{props.title}</h2>
      <span>{props.band} </span> &bull;
      <span>{props.releaseYear} </span> &bull;
      <span>{props.genre}</span>

      <table style={{ width: "100%" }}>
        <thead>
          <th>L.p.</th>
          <th>Tytuł</th>
          <th>Czas trwania</th>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Filmy</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        <Movie releaseYear={1999} title="The Matrix" posterUrl="https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg" />
        <Movie releaseYear={2014} title="Interstellar" posterUrl="https://fwcdn.pl/fpo/56/29/375629/7670122_2.8.webp" />
        <Movie releaseYear={2003} title="Taxi 3" posterUrl="https://upload.wikimedia.org/wikipedia/en/d/df/Taxi_3_film.jpg" />
      </div>

      <h1>Książki</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        <Book releaseYear={2019} numPages={272} title="Atomowe nawyki" coverUrl="https://files.legimi.com/images/44263fa8e9e4caa1720c7efd30d695e6/w512_u90.jpg" />
        <Book releaseYear={2012} numPages={667} title="Pułapki myślenia. O myśleniu szybkim i wolnym" coverUrl="https://static.profinfo.pl/storage/image/core_products/2026/8/23/196950ec8988246ea07ed9965506dcb3/admin/preview/6999907590569.webp" />
        <Book releaseYear={2025} numPages={304} title="Tiny experiments" coverUrl="https://m.media-amazon.com/images/I/61rUfWyyfoL._AC_UF1000,1000_QL80_.jpg" />
        <Book releaseYear={1999} numPages={352} title="Pragmatyczny programista" coverUrl="https://static01.helion.com.pl/global/okladki/vbig/prag2v.jpg" />
      </div>

      <h1>Albumy</h1>
      <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        <Album releaseYear={2005} band="Pendulum" title="Hold Your Colour" genre="drum'n'bass" coverUrl="https://muzikercdn.com/uploads/products/11924/1192412/main_70a2a6cc.jpg">
          <Track index={1} title="Prelude" length="0:52" />
          <Track index={2} title="Slam" length="5:44" />
          <Track index={3} title="Plasticworld" length="6:21" />
          <Track index={4} title="Fasten Your Seatbelt" length="6:38" />
          <Track index={5} title="Through the Loop" length="6:13" />
          <Track index={6} title="Sounds of Life" length="5:21" />
          <Track index={7} title="Girl in the Fire" length="4:53" />
          <Track index={8} title="Tarantula" length="5:31" />
          <Track index={9} title="Out Here" length="6:07" />
          <Track index={10} title="Hold Your Colour" length="5:28" />
          <Track index={11} title="The Terminal" length="5:42" />
          <Track index={12} title="Streamline" length="5:23" />
          <Track index={13} title="Another Planet" length="7:38" />
          <Track index={14} title="Still Grey" length="7:51" />
        </Album>
        <Album releaseYear={2003} band="Overseer" title="Wreckage" genre="big beat" coverUrl="https://upload.wikimedia.org/wikipedia/en/8/84/Overseer_-_Wreckage.jpg">
          <Track index={1} length="4:47" title="Slayed" />
          <Track index={2} title="Stompbox" length="3:53" />
          <Track index={3} title="Supermoves" length="4:47" />
          <Track index={4} title="Velocity Shift" length="2:08" />
          <Track index={5} title="Horndog" length="3:31" />
          <Track index={6} title="Meteorology" length="5:32" />
          <Track index={7} title="Aquaplane" length="5:14" />
          <Track index={8} title="Doomsday" length="3:14" />
          <Track index={9} title="Basstrap" length="4:03" />
          <Track index={10} title="Sparks" length="6:02" />
          <Track index={11} title="Never" length="6:36" />
          <Track index={12} title="Heligoland" length="26:56" />
        </Album>
        <Album releaseYear={2001} band="Daft Punk" title="Discovery" genre="disco house" coverUrl="https://ecsmedia.pl/c/discovery-b-iext197156812.jpg">
          <Track index={1} title="One More Time" length="5:20" />
          <Track index={2} title="Aerodynamic" length="3:27" />
          <Track index={3} title="Digital Love" length="4:58" />
          <Track index={4} title="Harder, Better, Faster, Stronger" length="3:45" />
          <Track index={5} title="Crescendolls" length="3:31" />
          <Track index={6} title="Nightvision" length="1:44" />
          <Track index={7} title="Superheroes" length="3:57" />
          <Track index={8} title="High Life" length="3:22" />
          <Track index={9} title="Something About Us" length="3:51" />
          <Track index={10} title="Voyager" length="3:47" />
          <Track index={11} title="Veridis Quo" length="5:44" />
          <Track index={12} title="Short Circuit" length="3:26" />
          <Track index={13} title="Face to Face" length="3:58" />
          <Track index={14} title="Too Long" length="10:00" />
        </Album>
      </div>
    </div>
  );
}

export default App
