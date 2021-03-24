var element = document.getElementById('btn');
element.addEventListener("click", fun1);


function fun1() {

  // ******************************  WORKING OF THE AJAX REQUEST **********************************
  // // method to send the request to any live server though AJAx:

  // 1. create the object to send the reequest:

  const ajaxRequestObj = new XMLHttpRequest();

  // intiate the the request object before the send to server:

  ajaxRequestObj.open('GET', 'https://restcountries.eu/rest/v2/name/nepal', true)

  // 3. send the ajax request to the server 

  ajaxRequestObj.send();


  // // method to how get the respose send by the live server

  // 1. when work in progess then (progess method of the send object run);

  ajaxRequestObj.onprogress = function (progress_info) {
    console.log(progress_info);
    console.log("work is in the progess");
  }
  // 2. when respose is ready from the server then we our (onload) propety of the send object would be executed  

  ajaxRequestObj.onload = function (onload_info) {
    
    // here we fetch the which come from server as response of our send request:
    var [data] = JSON.parse(ajaxRequestObj.responseText);
    
    
    var htmlpart = `<div id="child">
    <!-- image holder part -->
    <div id="image_holder">
        <img src="${data.flag}" alt="flag image">
    </div>
    <!--  below the image hodler part-->
    <p> ${data.name}</p>
    <p> Capital: ${data.capital}</p>

    <hr>
    <!-- below the horizontal line -->
    <div id="footer">

        <div class="below">${data.nativeName} <br> native Language  </div>
        <div class="below">${data.population} <br> Population</div>
        <div class="below">${data.demonym} <br>Demonym</div>
    </div>
</div>`

// here we add HTML in the update mode:
    document.getElementById('parent').innerHTML= htmlpart;
    


  }

  // *****************************  END OF THE AJAX REQUEST **************************

}