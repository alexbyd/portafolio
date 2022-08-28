


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))





// hay que configurar un proxi para poder perar con la clave api.
// segun lo que esta en la documentacion.
/*
const http = require('https')
const url = 'https://api.blockchair.com/bitcoin/stats?key=G___oGohGjhTGHtVOx8mmlNZokAlz5b4';

http.get(url, res => {
  let data = '';
  res.on('data',chunk =>{
    data += chunk;
  });
  res.on('end',() =>{
    data = JSON.parse(data);
    console.log(data);
  })
}).on("error", err =>{
  console.log(err.message);
})
*/
//acceder a los datos especificos que deseo mostar


