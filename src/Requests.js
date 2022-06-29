const key = 'bc5a577dc7b5aeb527f0e599ff7e09a5'

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
}

export default requests
