//document.getElementById('getthedata').addEventListener('click',getData);
window.addEventListener("load", getData)

  datafile = 'https://jobs.github.com/positions.json?description=python&location=new+york';

    function getData(){
      fetch(datafile, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
      })

        .then(function(response){
          return response.json();
        }).then(function(data){
          console.log(data);
          let first = ` `;

          data.features.map(function(jobs){
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
