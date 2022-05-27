// {/* <form id="myform" onsubmit="calculatetemp(); return false">


//         <label id="temp">Please enter the Temperature you want to convert</label>
//         <input type="number" id="mytemp">

//         <select name="selecttemp" id="selecttemp">

//             <option value="cel">Celcius</option>
//             <option value="far">Feranete</option>


//         </select> <br />

//         <input type="submit" id="submit"> <br />

//         <span id="resultcontainer"></span>


//     </form> */}



const calculateTemp = () => {

  const inputtext = document.getElementById('temp').value;
  console.log(inputtext);

  const selectedvalue = documnet.getElementById("temp_diff");
  const userselectedvalue = temp_diff.options[selectedvalue.selectedIndex].value;
  console.log(userselectedvalue);
 

  // const convertofar = (cel) => {

  //   let farenhite = Math.round((cel * 9 / 5) + 32);
  //   return farenhite;

  // }

  // const converttocel = (far) => {

  //   let celcius = Math.round((far - 32) * 5 / 9);
  //   return celcius;

  // }

  // let result;

  // if (userselectedvalue == "cel") {

  //   result = convertofar(inputtext);
  //   document.getElementById("resultcontainer").innerHTML = `= ${result} degree Farenhite`;

  // } else {

  //   result = converttocel(inputtext);
  //   document.getElementById("resultcontainer").innerHTML = `= ${result} degree celcius`;

  // }



}




