import { ServerResponseFilm } from '../../types';
import  style from './FilmInfo.module.css';

export const FilmInfo = () => {

  const filmData: ServerResponseFilm = {
    Title: "War",
    Year: "2007",
    Rated: "R",
    Released: "24 Aug 2007",
    Runtime: "103 min",
    Genre: "Action, Crime, Thriller",
    Director: "Philip G. Atwell",
    Writer: "Lee Anthony Smith, Gregory J. Bradley",
    Actors: "Jet Li, Jason Statham, Nadine Velazquez",
    Plot: "An FBI Agent seeks vengeance on a mysterious assassin known as \"Rogue\" who murdered his partner.",
    Language: "English, Mandarin, Japanese, Cantonese",
    Country: "Canada, United States",
    Awards: "1 nomination",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.2/10"
      },
      {
        Source: "Metacritic",
        Value: "36/100"
      }
    ],
    Metascore: "36",
    imdbRating: "6.2",
    imdbVotes: "90,807",
    imdbID: "tt0499556",
    Type: "movie",
    DVD: "05 Jun 2007",
    BoxOffice: "$22,486,409",
    Production: "New Glory Productions",
    Website: "N/A",
    Response: "True"
  }

  return (
    <div className={style.blockFilmInfo}>
      <div>
        <img src={filmData.Poster} alt='poster form film'/>
        <div>
          <p>Metascore: {filmData.Metascore}</p>
          <p>imdbRating: {filmData.imdbRating}</p>
          <p>imdbVotes: {filmData.imdbVotes}</p>
        </div>
      </div>
      <div>
        <h2>{filmData.Title}</h2>
        <p>{filmData.Plot}</p>
        <div>
          <h3>Info</h3>
          <h4>Film title: {filmData.Title}</h4>
          <p>Genre: {filmData.Genre}</p>
          <p>Released: {filmData.Released}</p>
          <p>Director: {filmData.Director}</p>
          <p>Actors: {filmData.Actors}</p>
          <p>Country: {filmData.Country}</p>
          <p>Budget: {filmData.BoxOffice}</p>
        </div>
      </div>
    </div>
  );
};

