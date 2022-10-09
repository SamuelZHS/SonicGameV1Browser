
const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {

    sonic.classList.add('jump');

    setTimeout(() => {

        sonic.classList.remove('jump');


    },500);
}

const loop = setInterval(() => {
      
        const pipePosition = pipe.offsetleft;
        const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

        console.log(sonicPosition);

        if (pipePosition <= 115) {

                 pipe.style.animation = 'none';
                 pipe.style.left = `${pipePosition}px`;

                 sonic.style.animation = 'none';
                 sonic.style.bottom = `${sonicPosition}px`;
    }



}, 10)

document;addEventListener('keydown', jump)