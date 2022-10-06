const url = 'https://pokeapi.co/api/v2/pokemon/1/'

fetch(url)
    
    .then(Response => Response.json())
    
    .then(data => {

        let element = document.getElementById("element");
        element.innerHTML = `
                        <h1>${data.name}</h1>
                        <p>${data.order}</p>
                        <img src='${data.sprites.front_default}'/>

                        `;
        console.log(data);
    })
    .catch(err => console.log(err));