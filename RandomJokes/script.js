{/* <button id="randomjoke">ClickforRandomJokes</button>

<p id="para">Nitya is good</p> */}


const button = document.getElementById("randomjoke");
const paragraph = document.getElementById("para");


try {

    const generaterandomjokes = async () => {


        const convert = {

            headers: {

                Accept: "application/json"

            }

        };

        const res = await fetch("https://icanhazdadjoke.com/", convert);
        const data = await res.json();

        paragraph.innerHTML = data.joke;


    };



    button.addEventListener("click", generaterandomjokes);
    generaterandomjokes();


} catch (error) {

    console.log(error);

}



