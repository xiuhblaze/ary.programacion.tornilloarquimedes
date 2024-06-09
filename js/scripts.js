const header = (titulo, subtitulo) => {
    const contenidoHTML = `<div class="page-header min-vh-75 relative" style="background-image: url('/img/hoja-antigua.jpg');">
        <span class="mask bg-gradient-warning opacity-4"></span>
        <div class="container">
            <div class="row">
            <div class="col-lg-7 text-center mx-auto">
                <h1 class="text-white pt-3 mt-n5">${ titulo }</h1>
                <p class="lead text-white mt-3">${ subtitulo }</p>
            </div>
            </div>
        </div>
    </div>`

    var contenedor = document.getElementById('header');
    contenedor.innerHTML = contenidoHTML;
}

const menu = (id) => {
    const contenidoHTML = `
        <li class="nav-item">
            <a href="./integrantes.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Integrantes
            </a>
        </li>
        <li class="nav-item">
            <a href="./contact.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Contacto
            </a>
        </li>
    `;

    var contenedor = document.getElementById(id);
    contenedor.innerHTML = contenidoHTML;
};

