const header = (titulo, subtitulo) => {    
    const contenidoHTML = `<div class="page-header min-vh-75 relative" style="background-image: url('/img/hoja-antigua.jpg');">
        <span class="mask bg-gradient-warning opacity-4"></span>
        <div class="container">
            <div class="row">
            <div class="col-lg-7 text-center mx-auto">
                <h1 class="text-white pt-3 mt-n5">${ !!titulo ? titulo : '(falta el título)'}</h1>
                <p class="lead text-white mt-3">${!!subtitulo ? subtitulo : '(falta el subtitulo)'}</p>
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
            <a href="./marcoTeorico.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Marco Teorico
            </a>
        </li>
        <li class="nav-item">
            <a href="./problemas.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Problemas a Solucionar
            </a>
        </li>
        <li class="nav-item">
            <a href="./ventajas.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Ventajas
            </a>
        </li>
           <li class="nav-item">
            <a href="./costos.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Costos
            </a>
        </li>
         </li>
           <li class="nav-item">
            <a href="./mas.html" class="nav-link ps-2 d-flex cursor-pointer align-items-center">
                Mas info.
            </a>
        </li>
    
    `;

    var contenedor = document.getElementById(id);
    contenedor.innerHTML = contenidoHTML;
};

const footer = (id) => {
    const contenidoHTML = `
        <div class="container">
            <div class=" row">
                <div class="col-md-3 mb-4 ms-auto">
                    <div>
                    
                        <h6 class="font-weight-bolder mb-4">Tornillo de Arquimedes</h6>
                    </div>
                    <div>
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://www.instagram.com/tornillo_de_arquimedes/"
                                    target="_blank">
                                    <i class="fab fa-instagram text-lg opacity-8"></i>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link pe-1"
                                    href="https://x.com/tornillo_arquim?t=XTA99lfxcM5IyrDau8Jk9g&s=09" target="_blank">
                                    <i class="fab fa-twitter text-lg opacity-8"></i>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link pe-1"
                                    href="https://www.facebook.com/profile.php?id=61560472725498&mibextid=ZbWKwL"
                                    target="_blank">
                                    <i class="fab fa-facebook text-lg opacity-8"></i>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://youtu.be/XOzKbYTBT-4?si=pfOQ6CLceZX-Ff5I"
                                    target="_blank">
                                    <i class="fab fa-youtube text-lg opacity-8"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-6 mb-4">
                    <div>
                        <h6 class="text-sm">
                            <i class="fa-solid fa-users me-1"></i>
                            Integrantes
                        </h6>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.instagram.com/aria.dne124/" target="_blank">                                    
                                    Ariadne Castillo 
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://www.instagram.com/kevinomm/" target="_blank">
                                    Kevin Medina
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://www.instagram.com/c_r_i_s_154/"
                                    target="_blank">
                                    Cristian Mata
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-6 mb-4">
                    <div>
                        <h6 class="text-sm">
                            <i class="fa-solid fa-book me-1"></i>
                            Referencias
                        </h6>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link" href="./bibliografias.html" target="_blank">
                                    Bibliografias
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://www.cbtis226.edu.mx/" target="_blank">
                                    Centro de Estudios
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="./permisos.html" target="_blank">
                                    Permisos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-6 mb-4">
                    <div>
                        <h6 class="text-sm">
                            <i class="fa-solid fa-chalkboard-user me-1"></i>
                            Profesores
                        </h6>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#" target="_blank">
                                    Oscar Paul Jimenez Bibian
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#"
                                    target="_blank">
                                    Ing. Amb. Ramsés Rabindranath García Ramírez
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 col-sm-6 col-6 mb-4 me-auto">
                    <div>
                    
                        <ul class="flex-column ms-n3 nav">
                        
                        </ul>
                    </div>
                </div>
                <div class="col-12">
                    <div class="text-center">
                        <p class="text-dark my-4 text-sm font-weight-normal">
                            All rights reserved. Copyright ©
                            <script>document.write(new Date().getFullYear())</script> Material Kit by <a
                                href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

    var contenedor = document.getElementById(id);
    contenedor.innerHTML = contenidoHTML;
};