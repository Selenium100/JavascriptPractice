

//   <button id="dogs">ClickForNextRandomDog</button>
     
//   <img src="https://images.dog.ceo/breeds/retriever-curly/n02099429_2915.jpg" alt="" id="src">


   const button=document.getElementById("dogs");
   const image=document.getElementById("para");

try {

    const generaterandomdogs= async () =>{


        const nitya={
    
            headers:{
    
                Accept:"application/json"
            }
        };
    
    
         const res= await  fetch("https://dog.ceo/api/breeds/image/random" , nitya);
        const data= await  res.json();
        image.innerHTML=data.status;
    
    
        
       };
    
       button.addEventListener("click" , generaterandomdogs);
       generaterandomdogs();
    
} catch (error) {
    console.log(error);
}


   