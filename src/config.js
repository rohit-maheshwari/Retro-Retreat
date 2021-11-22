// Configuration for newsAPI

const API_URL = "https://newsapi.org/v2/";
const API_KEY =
  "25ad3d50765640fea711c2c566b5adf5"; /*process.env.REACT_APP_API_KEY*/

const POPULAR_BASE_URL = `${API_URL}top-headlines?country=us`;

const BASE_URL = `${API_URL}everything?`
// For login and voting
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;

export { POPULAR_BASE_URL, BASE_URL, API_URL, API_KEY, REQUEST_TOKEN_URL };
