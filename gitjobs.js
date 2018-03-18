url = 'https://jobs.github.com/positions.json?description=python&location=new+york';
var myInit = {  method: 'GET',
                mode: 'no-cors'};


document.getElementById('getthedata').addEventListener('click', getData);
//window.addEventListener("load" getData);

function getData() {
  fetch(url, myInit).then(function(response) {
    return response.json();
  })
    .then(function(myJson){
      console.log(myJson);
    })

     data.features.map(function(jobs) {
       first += `
       <hr>
       <ul>
         <li>${jobs.properties.title}</li>
         <li>${jobs.properties.location}</li>
       </ul>
     `
     })

     document.getElementById('jobs').innerHTML = first
    })
}
