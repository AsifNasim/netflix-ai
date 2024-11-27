export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg";

  export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDdlOTU3ZWJlYmYzMjRmODQ2MDM2MGFmOWFmY2Y1MyIsIm5iZiI6MTcyODAyNDAyNi40NDEyMTgsInN1YiI6IjY2ZmY4OWNjOTI1ZmRmOTI1YjdjYjkyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hX06CqgqJI_J-LJOfMnQKj8H6XQbujAz2KjquQTEMGw'
    }
  };

  export const getMoviePlayNowURL = `https://api.themoviedb.org/3/movie/now_playing`;
  export const getPopularMovieURL = `https://api.themoviedb.org/3/movie/popular`;
  export const getTopRatedMovieURL = `https://api.themoviedb.org/3/movie/top_rated`;
  export const getUpcomingMovieURL = `https://api.themoviedb.org/3/movie/upcoming`;
  export const getMovieVideosTrailer = `https://api.themoviedb.org/3/movie/`;
  export const getMovieByName = `https://api.themoviedb.org/3/search/movie`;

  export const getMovieImageHostURL = `https://media.themoviedb.org/t/p/w220_and_h330_face`;

  export const SUPPORTED_LANGUAGE = [ 
    {identifier: 'en', name:'english'},
    {identifier: 'hindi', name:'hindi'},
    {identifier: 'spanish', name:'spanish'},
    {identifier: 'arabic', name:'arabic'}
  ]