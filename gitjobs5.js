document.getElementById('getthedata').addEventListener('click', sayHello);

function sayHello(){
  console.log('Hello');
}

var url = 'https://jobs.github.com/positions.json?description=python&location=new+york';


// function requestJSONP(url) {
//   console.log('hello');
//   // create script with passed in URL
//   var script = document.createElement('script');
//   script.src = url;
//
//   // after the script is loaded (and executed), remove it
//   // script.onload = function () {
//   //   this.remove();
//   // };
//
//   // insert script tag into the DOM (append to <head>)
//   var head = document.getElementsByTagName('head')[0];
//   head.insertBefore(script, null);
//   console.log('goodbye');
// }

//requestJSONP(url);
