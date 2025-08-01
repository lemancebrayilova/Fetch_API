let url = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies";
let movies = document.getElementsByClassName('movies')[0];

fetch(url).then((response) => {
    return response.json();
}).then((result) => {
    // console.log(result);
    result.forEach(element => {
        const { Title, Year, Runtime, Poster } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Poster}" alt="">
            <div class="content">
                <h3>${Title}</h3>
                <div class="year_time">
                    <h6>${Year}</h6>
                    <h6>${Runtime}</h6>
                    <h6>7/10</h6>
                </div>
            </div>
        `;

        movies.appendChild(card);
    });
})