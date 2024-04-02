const accessKey = "7ac57520dbf0850668deb7c9be8fc2bd" //storing the key into variable

const formEl = document.querySelector("form")  //selected the form element
const inputEl = document.getElementById("search-input")  //selected the input element
const searchResults = document.querySelector(".search-results") //selected the search results div container
const showMore = document.getElementById("show-more-button") //selected the showMore button

let inputData = "" //stores all the keywords the user is typing
let page = 1 //if the user clicks the showMore button the pg-no. will increase

async function searchMovies(){
    inputData = inputEl.value;  // the value of input element is stored in the input data
    const url = `https://api.themoviedb.org/3/search/movie?page=${page}&api_key=${accessKey}&query=${inputData}`

    const response = await fetch(url) //fetch data from the url, response is a variable here
    const data = await response.json() //get the data and convert it into json format(here the data is in response variable thats why response.json() is used) || all the data is stored in data variable now

    const results = data.results //get all the results into the results variable

    if(page==1){ //starts from page 1
        searchResults.innerHTML = "" //for the 1st page the inner html set to be empty
    }

    //as the results stores all the data, we need to map the data to show the images, texts etc..
    results.map((result) => {
        //we push the data into the html div tags to display it
        const imageWrapper = document.createElement('div') //creating a div to store the new datas
        imageWrapper.classList.add("search-result")
    })
}
