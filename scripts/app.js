const addMovieBtn = document.querySelector(".add-movie");
const searchBtn = document.querySelector(".search");

const movies = [];

const renderMovies = (filter='') => {
  const movieList = document.querySelector("#movies");

  if (movies.length === 0) {
    movieList.classList.remove('visible')
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filterdMovies=!filter ? movies : movies.filter((movie)=>movie.info.title.includes(filter))

  filterdMovies.forEach((movie)=>{
    let movieEl = document.createElement("li");
    let text=movie.info.title + ' - '

    for (const key in movie.info){
        if(key!=='title'){
            text=text+`${key}:${movie.info[key]}`
        }
    }
    movieEl.textContent=text;
    movieList.append(movieEl);
  })

};

const clearInputs = () => {
  let inputs = document.getElementsByTagName("input");

  // inputs.forEach(element => {
  //     element.value=''
  // });
  for (const input of inputs) {
    input.value = "";
  }
  // movieTitle=''
  // movieInformation=''
  // movieExtraInformation=''
};

const searchMovieHandler=()=>{
    const filterTerm=document.getElementById('filter-title').value
    renderMovies(filterTerm)
}
const startAddmovieHandler = () => {
  const movieTitle = document.getElementById("fav-movie").value;
  const movieInformation = document.getElementById("name").value;
  const movieExtraInformation = document.getElementById("value").value;
  // console.log(movieTitle)
  if (
    movieTitle.trim() == "" ||
    movieInformation.trim() === "" ||
    movieExtraInformation.trim() === ""
  ) {
    alert("Fields should not be Empty!!");
    return;
  }
  const newMovie = {
    info: {
      title: movieTitle,
      [movieInformation]: movieExtraInformation,
    },
    id: Math.random().toString(),
  };

  clearInputs();
  movies.push(newMovie);
  console.log(movies);
  renderMovies();
};

addMovieBtn.addEventListener("click", startAddmovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
