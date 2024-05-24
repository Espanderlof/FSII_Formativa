const categorias = {
    categorias: [
        {
            id: 1,
            nombre: "Estrategia",
            img_url: "assets/img/img_estrategia.jpeg",
            detalle: "Juegos de mesa de estrategia.",
            juegos: [
                {
                    cod: 'A001',
                    titulo: "Catan - El Juego",
                    descripcion: "En Catan, los jugadores intentan ser la fuerza dominante en la isla de Catan mediante la construcción de asentamientos, ciudades y carreteras. En cada turno se tiran los dados para determinar qué recursos produce la isla.",
                    precioNormal: "$34.990",
                    precioOferta: "",
                    img_url: "catan-el-juego.jpg",
                },
                {
                    cod: 'A002',
                    titulo: "¡Aventureros al Tren! San Francisco",
                    descripcion: "¡Bienvenidos a San Francisco! Puedes sentir el peso de los souvenirs en la mochila mientras te asomas desde el tranvía.",
                    precioNormal: "$25.990",
                    precioOferta: "$19.990",
                    img_url: "aventureros-al-tren-san-francisco.jpg",
                },
                {
                    cod: 'A003',
                    titulo: "Pendulum",
                    descripcion: "Los jugadores deben usar el tiempo real como un recurso y afinar la estrategia para superar a sus oponentes. Fue el prototipo mejor calificado en la historia del del Diseño de Stonemaier Games.",
                    precioNormal: "$59.990",
                    precioOferta: "$50.992",
                    img_url: "pendulum.jpg",
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
                    cod: 'A004',
                    titulo: "Taco Gatito Pizza",
                    descripcion: "Este juego de cartas requiere de toda tu atención y rapidez. ¡Sobre todo rapidez! La vas a necesitar para no quedarte con todas las cartas del centro de la mesa.",
                    precioNormal: "$11.990",
                    precioOferta: "",
                    img_url: "taco-gatito-pizza.jpg",
                },
                {
                    cod: 'A005',
                    titulo: "Dixit: Harmonies",
                    descripcion: "Dixit Expansión: Harmonies (Dixit 8) es la octava expansión para el juego Dixit, incorpora el arte único y poderoso de Paul Echegoye, contiene 84 nuevas cartas para que pongan a volar la imaginación.",
                    precioNormal: "$25.000",
                    precioOferta: "$19.990",
                    img_url: "dixit-harmonies.jpg",
                },
                {
                    cod: 'A006',
                    titulo: "¡Hula-Hula!",
                    descripcion: "¡El gran mundial de Hula Hula ha comenzado! Animales de todo el mundo se han congregado para demostrar sus dotes.",
                    precioNormal: "$20.000",
                    precioOferta: "$12.990",
                    img_url: "hula-hula.jpg",
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
                    cod: 'A007',
                    titulo: "Exit Kids: Acertijos en la Jungla",
                    descripcion: "EXIT Kids: Acertijos en la jungla es un juego de escape cooperativo, que se puede disfrutar en solitario o en un grupo de hasta 4 personas, a partir de 5 años, en partidas que pueden durar unos 20 minutos.",
                    precioNormal: "$14.990",
                    precioOferta: "",
                    img_url: "exit-kids-acertijos-en-la-jungla-.jpg",
                },
                {
                    cod: 'A008',
                    titulo: "Tales & Games: Aladdin & the Magic Lamp",
                    descripcion: "El hechicero te ha enviado, un pilluelo de la calle como Aladdin, a una cueva para buscar una lámpara mágica que te permita invocar los favores de un genio.",
                    precioNormal: "$30.000",
                    precioOferta: "$24.990",
                    img_url: "tales-games-aladdin-the-magic-lamp.jpg",
                },
                {
                    cod: 'A009',
                    titulo: "Pandemic: Estado de Emergencia",
                    descripcion: "Salvar el mundo se ha vuelto un poco más difícil en Pandemic: Estado de Emergencia, una expansión para Pandemic.",
                    precioNormal: "$39.990",
                    precioOferta: "$33.992",
                    img_url: "pandemic-estado-de-emergencia.jpg",
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
                    cod: 'A010',
                    titulo: "Master of Orion: El Juego de Mesa",
                    descripcion: "Master of Orion: El Juego de Mesa te lleva al mundo del legendario videojuego de estrategia. Vas a dirigir a una de las razas que se enfrentarán en la confrontación con el espacio exterior.",
                    precioNormal: "$19.990",
                    precioOferta: "",
                    img_url: "master-of-orion-el-juego-de-mesa.jpg",
                },
                {
                    cod: 'A011',
                    titulo: "Dune: A Game of Conquest and Diplomacy",
                    descripcion: "¡Participa en una de las historias de ciencia ficción más famosas de todos los tiempos! Control de una de las cuatro grandes facciones: la Casa Atreides, la Casa Harkonnen, los Fremen y el Imperio.",
                    precioNormal: "$59.990",
                    precioOferta: "$47.992",
                    img_url: "dune-a-game-of-conquest-and-diplomacy.jpg",
                },
                {
                    cod: 'A012',
                    titulo: "Rambo: The Board Game - First Blood",
                    descripcion: "¡Conviértete en Rambo y toma el control de la historia de la película First Blood! Revive la acción y llénate de nostalgia en este juego de mesa en solitario.",
                    precioNormal: "$49.990",
                    precioOferta: "$39.992",
                    img_url: "rambo-the-board-game-first-blood.jpg",
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
const renderCategoria = () => {
    const viewMain = document.getElementById('viewMain');
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaId = urlParams.get('id');
    const categoria = categorias.categorias.find(cat => cat.id === parseInt(categoriaId));

    if (categoria) {
        document.title = `TIJUME GAMES | ${categoria.nombre}`;

        // Limpiar el contenido previo de viewMain
        viewMain.innerHTML = '';

        // Agregar el encabezado de la categoría
        const headerRow = document.createElement('div');
        headerRow.classList.add('row');

        const headerCol = document.createElement('div');
        headerCol.classList.add('col-12');

        const heading = document.createElement('h2');
        heading.classList.add('text-center');
        heading.textContent = `Juegos ${categoria.nombre.toLowerCase()}`;

        headerCol.appendChild(heading);
        headerRow.appendChild(headerCol);
        viewMain.appendChild(headerRow);

        categoria.juegos.forEach(juego => {
            const col = document.createElement('div');
            col.classList.add('col-12', 'mb-2');
      
            const card = document.createElement('div');
            card.classList.add('card');
      
            const row = document.createElement('div');
            row.classList.add('row', 'g-0');
      
            const imgCol = document.createElement('div');
            imgCol.classList.add('col-md-4', 'text-center');
      
            const img = document.createElement('img');
            img.src = `assets/img/${juego.img_url}`;
            img.alt = 'Imagen';
            img.classList.add('img-fluid', 'rounded-start');
      
            const contentCol = document.createElement('div');
            contentCol.classList.add('col-md-8');
      
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
      
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = juego.titulo;
      
            const description = document.createElement('p');
            description.classList.add('card-text');
            description.textContent = juego.descripcion;
      
            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `Precio normal: ${juego.precioNormal}`;
      
            const discountPrice = document.createElement('p');
            discountPrice.classList.add('discount-price');
      
            if (juego.precioOferta) {
              discountPrice.textContent = `Precio con descuento: ${juego.precioOferta}`;
            }
      
            const button = document.createElement('button');
            button.type = 'button';
            button.classList.add('btn', 'btn-primary');
            button.textContent = 'Agregar al carrito';
      
            cardBody.appendChild(title);
            cardBody.appendChild(description);
            cardBody.appendChild(price);
      
            if (juego.precioOferta) {
              cardBody.appendChild(discountPrice);
            }
      
            cardBody.appendChild(button);
      
            contentCol.appendChild(cardBody);
      
            imgCol.appendChild(img);
      
            row.appendChild(imgCol);
            row.appendChild(contentCol);
      
            card.appendChild(row);
      
            col.appendChild(card);
      
            viewMain.appendChild(col);
        });
    } else {
        viewMain.innerHTML = `
        <div class="container pt-2 pb-2 ps-4 pe-4">
            <div class="row">
                <div class="col-sm-12 p-0">
                    <div class="alert alert-warning mb-0 mt-4" role="alert">
                        <h4 class="alert-heading text-center"><i class="bi bi-exclamation-triangle-fill"></i> Categoría no encontrada.</h4>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
