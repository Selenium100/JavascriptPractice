{/* <body>
 <div class="container">
<h3>Best Joke to Make your Day</h3>
<div id="joke"> Awsome joke is loading...</div>

<button id="nextjoke">NextJoke</button>

 </div> */}
 
//    https://icanhazdadjoke.com/

const joke = document.getElementById("joke");
const nextjokebutton = document.getElementById("nextjoke");




const generatejokes = () => {

    const setHeader = {

        headers: {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com/", setHeader).then((res) => res.json()).then((data) => {
        joke.innerHTML = data.joke;
    }).catch((err) => {
        console.log(err);
    })

};


nextjokebutton.addEventListener("click", generatejokes);
generatejokes();
