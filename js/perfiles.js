document.addEventListener('DOMContentLoaded', function () {

    const botonux = document.querySelector('#boton-ux-pf');
    const botondev = document.querySelector('#boton-developer-pf');
    const botondno = document.querySelector('#boton-diseno-pf');

    const neutroSection = document.querySelector('#neutro-section');
    const userexperience = document.querySelector('#userexperience');
    const developer = document.querySelector('#developer');
    const diseno = document.querySelector('#diseno');

    let selectedButton = "neutro";
    // EFECTO BOTONES

    botonux.addEventListener('click', () => {
        if (selectedButton == "ux") {
            selectedButton = "neutro";
            console.log(selectedButton);
            botonux.classList.remove('ux-color-inv-pf');
            botonux.classList.add('ux-color-pf');

            // CAMBIAR CONTENIDO

            neutroSection.classList.add('visible-sec')
            neutroSection.classList.remove('invisible-sec')
            userexperience.classList.remove('visible-sec')
            userexperience.classList.add('invisible-sec')

        } else {
            selectedButton = "ux";
            console.log(selectedButton);
            botonux.classList.remove('ux-color-pf');
            botonux.classList.add('ux-color-inv-pf');

            botondev.classList.add('developer-color-pf');
            botondev.classList.remove('developer-color-inv-pf');
            botondno.classList.add('diseno-color-pf');
            botondno.classList.remove('diseno-color-inv-pf');

            

            // CAMBIAR CONTENIDO

            neutroSection.classList.remove('visible-sec')
            neutroSection.classList.add('invisible-sec')
            developer.classList.remove('visible-sec')
            developer.classList.add('invisible-sec')
            diseno.classList.remove('visible-sec')
            diseno.classList.add('invisible-sec')

            userexperience.classList.add('visible-sec')
            userexperience.classList.remove('invisible-sec')

        }
    })


    botondev.addEventListener('click', () => {
        if (selectedButton == "dev") {
            selectedButton = "neutro";
            console.log(selectedButton);
            botondev.classList.add('developer-color-pf');
            botondev.classList.remove('developer-color-inv-pf');
            
            // CAMBIAR CONTENIDO

            neutroSection.classList.add('visible-sec')
            neutroSection.classList.remove('invisible-sec')
            developer.classList.remove('visible-sec')
            developer.classList.add('invisible-sec')


        } else {
            selectedButton = "dev";
            console.log(selectedButton);
            botondev.classList.remove('developer-color-pf');
            botondev.classList.add('developer-color-inv-pf');

            botonux.classList.remove('ux-color-inv-pf');
            botonux.classList.add('ux-color-pf');
            botondno.classList.add('diseno-color-pf');
            botondno.classList.remove('diseno-color-inv-pf');

            // CAMBIAR CONTENIDO

            neutroSection.classList.remove('visible-sec')
            neutroSection.classList.add('invisible-sec')
            userexperience.classList.remove('visible-sec')
            userexperience.classList.add('invisible-sec')
            diseno.classList.remove('visible-sec')
            diseno.classList.add('invisible-sec')

            developer.classList.add('visible-sec')
            developer.classList.remove('invisible-sec')
        }
    })


    botondno.addEventListener('click', () => {
        if (selectedButton == "dno") {
            selectedButton = "neutro";
            console.log(selectedButton);
            botondno.classList.add('diseno-color');
            botondno.classList.remove('diseno-color-inv');

            // CAMBIAR CONTENIDO

            neutroSection.classList.add('visible-sec')
            neutroSection.classList.remove('invisible-sec')
            diseno.classList.remove('visible-sec')
            diseno.classList.add('invisible-sec')


        } else {
            selectedButton = "dno";
            console.log(selectedButton);
            botondno.classList.remove('diseno-color');
            botondno.classList.add('diseno-color-inv');

            botonux.classList.remove('ux-color-inv');
            botonux.classList.add('ux-color');
            botondev.classList.add('developer-color');
            botondev.classList.remove('developer-color-inv');


            // CAMBIAR CONTENIDO

            neutroSection.classList.remove('visible-sec')
            neutroSection.classList.add('invisible-sec')
            developer.classList.remove('visible-sec')
            developer.classList.add('invisible-sec')
            userexperience.classList.remove('visible-sec')
            userexperience.classList.add('invisible-sec')

            diseno.classList.add('visible-sec')
            diseno.classList.remove('invisible-sec')

        }
    })



})