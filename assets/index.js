const categorias = {
    categorias: [
        {
            id: 1,
            nombre: "Estrategia",
            img_url: "assets/img/img_estrategia.jpeg",
            detalle: "Juegos de mesa de estrategia.",
            juegos: [
                {
                    titulo: "Age of Empires IV",
                    descripcion:
                        "Un juego de estrategia en tiempo real épico que abarca desde la Edad Media hasta la Edad Moderna.",
                    precioNormal: 59.99,
                    precioOferta: 44.99,
                },
                {
                    titulo: "Civilization VI",
                    descripcion:
                        "Un juego de estrategia por turnos donde construyes un imperio para resistir la prueba del tiempo.",
                    precioNormal: 59.99,
                    precioOferta: 29.99,
                },
                {
                    titulo: "StarCraft II",
                    descripcion:
                        "Un juego de estrategia en tiempo real ambientado en un futuro lejano con tres razas jugables.",
                    precioNormal: 39.99,
                    precioOferta: 19.99,
                },
            ],
        },
        {
            id: 2,
            nombre: "Party",
            img_url: "assets/img/img_party.jpeg",
            detalle: "Juegos de mesa para fiestas.",
            juegos: [
                {
                    titulo: "Mario Party Superstars",
                    descripcion:
                        "Un juego de fiesta con los personajes de Mario y minijuegos clásicos.",
                    precioNormal: 59.99,
                    precioOferta: 49.99,
                },
                {
                    titulo: "Among Us",
                    descripcion:
                        "Un juego de deducción social donde los jugadores trabajan juntos para identificar al impostor.",
                    precioNormal: 4.99,
                    precioOferta: 3.99,
                },
                {
                    titulo: "Fall Guys",
                    descripcion:
                        "Un juego de batalla real multijugador con obstáculos locos y divertidos.",
                    precioNormal: 19.99,
                    precioOferta: 14.99,
                },
            ],
        },
        {
            id: 3,
            nombre: "Cooperativos",
            img_url: "assets/img/img_cooperativos.jpeg",
            detalle: "Juegos de mesa cooperativos.",
            juegos: [
                {
                    titulo: "Overcooked! 2",
                    descripcion:
                        "Un juego de cocina cooperativo caótico donde los jugadores deben trabajar juntos para servir comidas.",
                    precioNormal: 24.99,
                    precioOferta: 12.49,
                },
                {
                    titulo: "Portal 2",
                    descripcion:
                        "Un juego de rompecabezas en primera persona con un modo cooperativo desafiante.",
                    precioNormal: 9.99,
                    precioOferta: 4.99,
                },
                {
                    titulo: "Minecraft",
                    descripcion:
                        "Un juego de mundo abierto donde los jugadores pueden construir y explorar juntos.",
                    precioNormal: 26.95,
                    precioOferta: 19.95,
                },
            ],
        },
        {
            id: 4,
            nombre: "Temáticos",
            img_url: "assets/img/img_tematicos.jpeg",
            detalle: "Juegos de mesa temáticos.",
            juegos: [
                {
                    titulo: "Red Dead Redemption 2",
                    descripcion:
                        "Un juego de mundo abierto ambientado en el Salvaje Oeste.",
                    precioNormal: 59.99,
                    precioOferta: 29.99,
                },
                {
                    titulo: "Assassin's Creed Valhalla",
                    descripcion:
                        "Un juego de acción y aventura ambientado en la era vikinga.",
                    precioNormal: 59.99,
                    precioOferta: 39.99,
                },
                {
                    titulo: "The Witcher 3: Wild Hunt",
                    descripcion:
                        "Un juego de rol ambientado en un mundo de fantasía oscura.",
                    precioNormal: 39.99,
                    precioOferta: 19.99,
                },
            ],
        },
    ],
};

const renderIndex = () => {
    const viewMain = document.getElementById('viewMain');

    categorias.categorias.forEach((categoria) => {
        console.log(`ID: ${categoria.id}, Nombre: ${categoria.nombre}`);

        const col = document.createElement('div');
        col.classList.add('col-sm-12', 'col-md-4', 'mb-sm-2');
        
        const card = document.createElement('div');
        card.classList.add('card');
        
        const img = document.createElement('img');
        img.src = categoria.img_url;
        img.classList.add('card-img-top');
        img.alt = categoria.nombre;
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = categoria.nombre;
        
        const text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = categoria.detalle;
        
        const link = document.createElement('a');
        link.href = `categoria.html?id=${categoria.id}`;
        link.classList.add('btn', 'btn-primary');
        link.textContent = 'Ver juegos';
        
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(link);
        
        card.appendChild(img);
        card.appendChild(cardBody);
        
        col.appendChild(card);
        
        viewMain.appendChild(col);
    });
}

