const navBar = document.querySelector('.navbar');
const navLogo = document.querySelector('.bar-logo > img');
const navLogo2 = document.querySelector('.bar-logo');
const navItems = document.querySelectorAll('.nav-item');


const loaderMenu = document.querySelector('.prp_loader_menu')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')

const cajaInfo = document.querySelector('.prp_caja_info')
var desplegable = false;


var totalFotos = 4;
var fotoPuesta = 1;
var firtsSlide = false;

// Cuando se inicia se ejecuta esta funcion
$(document).ready(function() {
    console.log("Hola que tal esto lo inicio");
    $('#nav-todos-items').hide();

    // setTimeout(() => {
        setInterval(() => {
            const imagen = document.getElementById('imagen_carrusel');
            if (fotoPuesta >= totalFotos) {
                fotoPuesta = 1;
            } else {
                fotoPuesta = fotoPuesta + 1;
            }
            imagen.style.opacity = '0';
        
            setTimeout(() => {
                imagen.setAttribute('src', `./img/carrousel/foto${fotoPuesta}.png`);
                setTimeout(() => {
                    imagen.style.opacity = '1';
                }, 100)
            }, 500)
        }, 5000);
    // }, 3000);
});


// Cuando pones el raton encima del loader para expandir la caja empieza a hacer la animación
loaderMenu.addEventListener('mouseover', ()=> {
    box1.style.animation = "abox1 1s 0.5s forwards ease-in-out infinite";
    box2.style.animation = "abox2 1s 0.5s forwards ease-in-out infinite";
    box3.style.animation = "abox3 1s 0.5s forwards ease-in-out infinite";
});

// Cuando el mouse no esta encima del div del loaderMenu la animación se para
loaderMenu.addEventListener('mouseout', ()=> {
    box1.style.animation = "";
    box2.style.animation = "";
    box3.style.animation = "";
})

$("#prp_loader_menu").click(function() {
    if (desplegable) {
        desplegable = false;
        navLogo.style.width = "33px";
        navLogo.style.height = "33px";
        navBar.style.width = "40px";
        cajaInfo.style.marginLeft = "40px"
        setTimeout(() => {
            navItems.forEach(navItem => {
                navItem.style.display = "none";
            });
            $('#nav-todos-items').hide();
        }, 300);
    } else {
        desplegable = true;
        navLogo.style.width = "86px";
        navLogo.style.height = "86px";
        navBar.style.width = "120px";
        cajaInfo.style.marginLeft = "120px"
        navItems.forEach(navItem => {
            navItem.style.display = "block";
        });
        $('#nav-todos-items').show();
    }
})

$("#nav-item1").click(function() {
    var navActual = document.querySelectorAll(".nav-actual");
    QuitarNavActual();
    $("#nav-item1").addClass("nav-actual");
    cajaInfo.classList.add("hide");
    setTimeout(() => {
        const aaaaa = document.getElementById('in_caja_imgs');
        aaaaa.hidden = false;
        cajaInfo.innerHTML = `
            <div class="so_seccion" id="in_caja_imgs">
                <div class="in_bloque_fotos">
                    <span onclick="alex_izquierdaaa()" class="fas fa-arrow-left alex_izquierda" id="alex_izquierda"></span>
                    <div class="in_carrusel_alex">
                        <img id="imagen_carrusel" src="./img/carrousel/foto1.png" alt="Imagen Robosynth">
                    </div>
                    <span onclick="alex_derecha()" class="fas fa-arrow-right alex_izquierda" id="alex_derecha"></span>
                </div>
            </div>

            <div class="in_lineanegra"></div>
    
            <div class="in_imglat">
                <img src="./img/mision.png" alt="" class="in_imagen1">    
            </div>
            <div class="in_imglat">
                <div class="in_valores_texto">
                    <p>
                        La empresa tiene como misión diseñar, desarrollar y fabricar robots autónomos de alta 
                        calidad equipados con tecnología de ultrasonido avanzada para detectar y esquivar objetos.
                        Buscan ofrecer soluciones robóticas innovadoras y confiables que mejoren la seguridad y 
                        productividad en diversos entornos, como la logística, la industria, el cuidado de la salud 
                        y el hogar inteligente. Su objetivo es liderar la industria con productos de calidad excepcional, 
                        establecer relaciones sólidas con clientes y socios, y contribuir al desarrollo sostenible, siempre 
                        operando de manera ética y responsable.
                    </p>
                </div>
            </div>
            <br><br>

            <div class="in_imglat">
                <img src="./img/vision.png" alt="Imagen" class="in_imagen2">
            </div>

            <div class="in_imglat">
                <div class="in_valores_texto">
                    <p>
                        Nuestra visión es liderar el desarrollo de robots autónomos de cuatro ruedas que utilizan 
                        ultrasonido para detectar y esquivar objetos. Buscamos revolucionar la interacción de los 
                        robots con su entorno, brindando soluciones avanzadas para mejorar la eficiencia y seguridad 
                        en logística, industria, cuidado de la salud y hogares inteligentes. Con tecnología innovadora, 
                        queremos facilitar tareas diarias, reducir riesgos y aumentar la productividad en múltiples sectores, 
                        destacando como una empresa confiable y líder comprometida con la excelencia en robótica autónoma.
                    </p>
                </div>
            </div>
            <br><br>

            <div class="in_imglat">
                <img src="./img/valor.png" alt="" class="in_imagen3">
            </div>
      
            <div class="in_imglat">
                <div class="in_valores_texto">
                    <p>
                    Innovación: Pioneros en robótica, desarrollando constantemente nuevas tecnologías y soluciones para mejorar la vida cotidiana. <br><br><br>

                    Calidad: Compromiso con productos de alta calidad que cumplen con los estándares más exigentes. Robots confiables, duraderos y seguros. <br><br><br>

                    Colaboración: Fomento de un entorno de trabajo colaborativo, valorando las ideas y habilidades únicas de cada miembro del equipo. Trabajo en equipo como clave del éxito. <br><br><br>
        
                    Responsabilidad: Preocupación por el impacto en la sociedad y el medio ambiente. Diseño de productos sostenibles y esfuerzos por minimizar el impacto ambiental. <br><br><br>
                    </p>
                </div>
            </div>
            <br><br>
            <div class="in_lineanegra"></div>

            <div class="in_artesanal">
                <h1>ROBOT 100% ARTESANAL</h1>
                <br><br><br><br>
                <img src="./img/motores (1).png" alt="">
                <img src="./img/ar_segunda_img.png" alt="">
                <img src="./img/ar_terceraparte_img.png" alt=""> <br><br>
                <p>
                    TODO HECHO PASO A PASO.....  
                </p>
            </div>
            <br><br><br>
        `
        cajaInfo.classList.remove("hide");
    }, 500);
    setTimeout(() => {
        consultarDatos();
    }, 3000);
})

$("#nav-item2").click(function() {
    var navActual = document.querySelectorAll(".nav-actual");
    QuitarNavActual();
    $("#nav-item2").addClass("nav-actual");
    cajaInfo.classList.add("hide");
    setTimeout(() => {
        cajaInfo.innerHTML = `
        <div class="so_seccion" id="in_caja_imgs">
            <div class="in_bloque_fotos">
                <span onclick="alex_izquierda()" class="fas fa-arrow-left alex_izquierda" id="alex_izquierda"></span>
                <div class="in_carrusel_alex">
                    <img id="imagen_carrusel" src="./img/carrousel/foto1.png" alt="Imagen Robosynth">
                </div>
                <span onclick="alex_derecha()" class="fas fa-arrow-right alex_izquierda" id="alex_derecha"></span>
            </div>
        </div>
        <div class="so_seccion">
            <div class="so_bloque">
                <div class="so_image">
                    <img src="./img/robot.jpg" alt="Robot de 4 ruedas"> 
                        <br> <br>
                    <img src="./img/robotdelado.png" alt="Robot de 4 ruedas">
                </div>
                <div class="so_text">
                    <h2 class="so_titulo">Sobre nosotros</h2>
                    <p class="so_texto">Somos dos estudiantes de SMX (Sistemas Microinformáticos y Redes) en
                        el Instituto de Puig Castellar y tenemos un proyecto de síntesis en el que estamos trabajando. 
                        Se trata de un robot de 4 ruedas que esquiva objetos con la ayuda de un sensor de ultrasonidos. 
                            <br> <br><br><br>
                        Hemos estado trabajando arduamente en nuestro proyecto 
                        final de síntesis, que consiste en la creación de un 
                        robot completamente funcional, montado y programado 
                        por nosotros mismos. Este proyecto es una muestra de  nuestra 
                        dedicación y habilidades técnicas en el campo de la programación 
                        informática y Arduino.
                            <br><br><br>
                        Nuestro robot cuenta con un diseño multifuncional y una programación personalizada que le permite detectar objetos y moverse con facilidad. 
                        Estamos contentos con los avances que hemos logrado hasta el momento y seguimos trabajando arduamente para perfeccionarlo aún más. 
                        Nos sentimos agradecidos por esta oportunidad de aprender y crecer en nuestra experiencia por la informática, y estamos emocionados de ver cómo 
                        nuestro proyecto evolucionará en el futuro.
                    </p>

                </div>
            </div>
        </div>

        <div class="so_bloque2">

            <br><br>
            <div class="">
                <div class="so_marco">
                    <img src="./img/marco_fotos2.png" alt="marco">
                </div>
                <br>
                <div class="so_textosami">
                    <h3 class="so_sami">¡Conozcan a Sami! Un entusiasta de la tecnología y aspirante al ciclo superior de ASIX. Pero eso no es todo, Sami también tiene un emocionante proyecto en mente: ¡un robot de 4 ruedas!
                        Este apasionado joven está decidido a llevar sus conocimientos al siguiente nivel mientras explora nuevos proyectos. Su ambición no tiene
                        límites y su energía es contagiosa. Sami está listo para sumergirse en el mundo de la robótica y crear un robot de 4 ruedas que deslumbre a todos.
                        Con su habilidad para resolver problemas y su pasión por la programación, Sami se embarcará en este proyecto con determinación. Su objetivo es crear
                        un robot versátil y autónomo que pueda moverse con elegancia y realizar tareas útiles.
                    </h3>
                </div>
            </div>
            <div class="">
                <div class="so_marco">
                    <img src="./img/marco_fotos.png" alt="marco2">
                </div>
                <br>
                <div>
                    <h3 class="so_alex">
                        ¡Alex! Un joven entusiasta y apasionado que tiene grandes sueños y aspira a hacer el ciclo superior de DAM (Desarrollo de Aplicaciones Multiplataforma).
                        Alex es un apasionado de la tecnología y del fascinante mundo del desarrollo de aplicaciones. Desde muy temprana edad, ha estado inmerso en el universo de la
                        programación, y su amor por crear soluciones digitales no tiene límites. Su ambición es clara: quiere llevar sus habilidades al siguiente nivel y convertirse 
                        en un experto en el desarrollo de aplicaciones multiplataforma. ¡Quiere convertirse en desarrollador full-stack!
                    </h3>
                </div>
                <!-- Aqui texto -->
            </div>
            <br><br><br><br><br><br>
            
        </div>

        `
        const aaaaa = document.getElementById('in_caja_imgs');
        aaaaa.hidden = 'hidden';
        cajaInfo.classList.remove("hide");
    }, 500);    
})

$("#nav-item3").click(function() {
    var navActual = document.querySelectorAll(".nav-actual");
    QuitarNavActual();
    $("#nav-item3").addClass("nav-actual");
    cajaInfo.classList.add("hide");
    setTimeout(() => {
        cajaInfo.innerHTML = `
        <div class="so_seccion" id="in_caja_imgs">
            <div class="in_bloque_fotos">
                <span onclick="alex_izquierda()" class="fas fa-arrow-left alex_izquierda" id="alex_izquierda"></span>
                <div class="in_carrusel_alex">
                    <img id="imagen_carrusel" src="./img/carrousel/foto1.png" alt="Imagen Robosynth">
                </div>
                <span onclick="alex_derecha()" class="fas fa-arrow-right alex_izquierda" id="alex_derecha"></span>
            </div>
        </div>
        <div class="ma_caja_all">
            <div class="ma_titulo">
                <h1>Manual de Usuario - Robot Esquivador de Objetos</h1>
            </div>
        
            <div class="ma_pasos ma_paso1">
                <h2 class="ma_titulo2">Paso 1: Preparación</h2>
                <ol>
                    <li>Desempaca el robot y verifica que todos los componentes estén incluidos.</li> <br>
                    <li>Encuentra una superficie nivelada y despejada para operar el robot.</li> <br>
                    <li>Asegúrate de que el robot esté completamente cargado o conectado a una fuente de alimentación antes de su
                        uso.</li> <br>
                </ol>
                <img src="./img/manual_desempaquetar.png" alt="">
            </div>
        
            <div class="ma_pasos ma_paso2">
                <h2 class="ma_titulo2">Paso 2: Encendido del Robot</h2>
                <ol>
                    <li>Ubica el interruptor de encendido en el robot.</li><br>
                    <li>Desliza el interruptor a la posición "ON" para iniciar el robot.</li><br>
                    <li>El robot emitirá una señal o indicador para indicar que está listo para funcionar.</li><br>
                </ol>
                <img src="./img/interruptor_manual.png" alt="">
            </div>
        
        
            <div class="ma_pasos ma_paso3">
                <h2 class="ma_titulo2">Paso 3: Funcionamiento</h2>
                <ol>
                    <li>Coloca suavemente el robot en el suelo en la posición inicial deseada.</li><br>
                    <li>Una vez que el robot esté en el suelo, comenzará a moverse y a esquivar objetos automáticamente.</li><br>
                    <li>Observa el comportamiento del robot y asegúrate de que evite los objetos de manera efectiva.</li><br>
                    <li>Si en algún momento deseas detener el robot, simplemente levántalo del suelo o coloca el interruptor de
                        encendido en la posición "Apagado".</li><br>
                </ol>
                <img src="./img/manuel_robot_suelo.png" alt="">
            </div>
        
            <div class="ma_pasos ma_paso4">
                <h2 class="ma_titulo2">Paso 4: Mantenimiento y Seguridad</h2>
                <ol>
                    <li>No toques ni interfieras con el robot mientras está en funcionamiento para evitar posibles daños o
                        lesiones.</li><br>
                    <li>Mantén el área de operación libre de obstáculos adicionales mientras el robot está en movimiento.</li><br>
                    <li>Limpia regularmente el robot con un paño suave y seco para mantenerlo en buenas condiciones.</li><br>
                    <li>Sigue las instrucciones de mantenimiento proporcionadas por el fabricante para un rendimiento óptimo del
                        robot.</li><br>
                </ol>
                <img src="./img/manual_limpeiza.png" alt="">
        
            </div>
            <div class="ma_final">
                <p>¡Felicidades! Ahora estás listo/a para disfrutar de la experiencia de ver al Robot Esquivador de Objetos en
                    acción. Recuerda seguir las precauciones de seguridad y utilizar el robot solo en las condiciones recomendadas.
                    Si tienes alguna pregunta adicional o encuentras algún problema, consulta el manual proporcionado por el
                    fabricante o busca asistencia técnica autorizada. ¡Que te diviertas!</p>
            </div>
        </div>
        `
        const aaaaa = document.getElementById('in_caja_imgs');
        aaaaa.hidden = 'hidden';
        cajaInfo.classList.remove("hide");
    }, 500);
})

$("#nav-item4").click(function() {
    QuitarNavActual();
    $("#nav-item4").addClass("nav-actual");
    cajaInfo.classList.add("hide");
    setTimeout(() => {
        cajaInfo.innerHTML = `
        <div class="so_seccion" id="in_caja_imgs">
            <div class="in_bloque_fotos">
                <span onclick="alex_izquierda()" class="fas fa-arrow-left alex_izquierda" id="alex_izquierda"></span>
                <div class="in_carrusel_alex">
                    <img id="imagen_carrusel" src="./img/carrousel/foto1.png" alt="Imagen Robosynth">
                </div>
                <span onclick="alex_derecha()" class="fas fa-arrow-right alex_izquierda" id="alex_derecha"></span>
            </div>
        </div>
        <div class="co_main">
            <div class="co_seccion">
                <h2 class="co_titulo">Información</h2>
                <p class="co_texto">¡Gracias por visitarnos! A continuación, encontrarás nuestra información de contacto:</p>
                <div class="co_caja_info">
                    <br>
                    <p class="co_texto"><strong>Teléfono: 631442748 / 933 91 61 11</strong></p>
                    <br>
                    <p class="co_texto"></p><strong>Email: help@robosynth.com</strong></p>
                </div>
                <div class="co_formulario">
                    <label class="co_label" for="nombre">Nombre:</label>
                    <input class="co_input" type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre aquí">
                
                    <label class="co_label" for="correo">Correo electrónico:</label>
                    <input class="co_input" type="email" id="correo" name="correo" placeholder="Introduce tu correo electrónico aquí">
                
                    <label class="co_label" for="mensaje">Mensaje:</label>
                    <textarea class="co_textarea" id="mensaje" name="mensaje" placeholder="Introduce tu mensaje aquí"></textarea>
                
                    <input class="co_input" type="submit" value="Enviar">
                </div>
            </div>
            <div class="co_seccion">
                <h2 class="co_titulo">Ubicación</h2>
                <h4 class="co_texto">¡ Estamos ubicados en la mejor zona de la ciudad !</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2990.2507458183118!2d2.1967032!3d41.4554766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcf3c7a3aa23%3A0x9711d34b7cfe4e4f!2sInstitut%20p%C3%BAblic%20Puig%20Castellar!5e0!3m2!1sca!2ses!4v1683716588489!5m2!1sca!2ses" class="co_iframe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mapa"></iframe>		
            </div>
        </div>
        `
        const aaaaa = document.getElementById('in_caja_imgs');
        aaaaa.hidden = 'hidden';
        cajaInfo.classList.remove("hide");
    }, 500);
})


function alex_izquierdaaa() {
    if (fotoPuesta <= 1) {
        fotoPuesta = totalFotos;
    } else {
        fotoPuesta = fotoPuesta - 1;
    }
    const imagen = document.getElementById('imagen_carrusel');
    imagen.style.opacity = '0';
    setTimeout(() => {
        imagen.setAttribute('src', `./img/carrousel/foto${fotoPuesta}.png`);
        setTimeout(() => {
            imagen.style.opacity = '1';
        }, 100)
    }, 500)
}

function alex_derecha() {
    const imagen = document.getElementById('imagen_carrusel');
    if (fotoPuesta >= totalFotos) {
        fotoPuesta = 1;
    } else {
        fotoPuesta = fotoPuesta + 1;
    }
    imagen.style.opacity = '0';
    setTimeout(() => {
        imagen.setAttribute('src', `./img/carrousel/foto${fotoPuesta}.png`);
        setTimeout(() => {
            imagen.style.opacity = '1';
        }, 100)
    }, 500)
}

function QuitarNavActual() {
    var navActual = document.querySelectorAll(".nav-actual");
    for (var i = 0; i < navActual.length; i++) {
        navActual[i].classList.remove("nav-actual");
    }
    // setTimeout(() => {
        
    //     navTodos.hidden = true;
    // }, 1000);
}


function consultarDatos() {
    fetch('http://alphatule.com:3000/consulta') // URL del servidor y ruta para la consulta
    // fetch('http://127.0.0.1:3000/consulta') // URL del servidor y ruta para la consulta
      .then(response => response.json())
      .then(data => {
        // Manipular los datos recibidos
        mostrarResultados(data);
    })
      .catch(error => {
        console.error('Error:', error);
    });
}

function mostrarResultados(data) {
    // Mostrar los resultados en el elemento <div> del HTML
    var asd = "Inicio de HTML:<br>";
    data.forEach(element => {
        asd = asd + `<h2>${element.id}</h2>
        <br>
        <p>${element.nombre}</p>`
    });
    cajaInfo.innerHTML = asd;
}