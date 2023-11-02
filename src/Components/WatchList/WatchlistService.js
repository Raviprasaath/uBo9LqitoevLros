import { instance, headers } from "../ApiFetch";

let key = JSON.parse(localStorage.getItem("userInfo")) || [];

const token = "Bearer " + key[0];
headers["Authorization"] = token;

function addtoWatchlist(movieId){
  console.log("headers",headers)
  const suffix = `social_media/watchlist/`+movieId;
  console.log("movieId",movieId)
  return instance.patch(suffix, 
    {
        showId: movieId
    },
    {headers} );
}
function getWatchlist() {
  console.log("headers",headers)
  const suffix =`ott/watchlist/like`;
  return instance.get(suffix, 
    {headers} );
}
export { addtoWatchlist,getWatchlist };
