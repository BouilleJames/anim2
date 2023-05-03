// window.onload = () => {
//     const canvas = document.getElementById('bouger-ball');
//     let context = canvas.getContext('2d');

//     const ballRadius = 20;
//     const ballColor = '#fff';
//     let ballX = 300;
//     let ballY = 200;
//     let changeX = 4;
//     let changeY = 4;

//     const animationLoop = () => {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         if(ballY + ballRadius > canvas.height){
//             changeY *= -1;
//         }
//         if(ballX + ballRadius > canvas.width){
//             changeX *= -1;
//         }
//         if(ballY - ballRadius < 0){
//             changeY *= -1;
//         }
//         if(ballX - ballRadius < 0){
//             changeX *= -1;
//         }

//         ballX += changeX;
//         ballY += changeY;

//         drawBall(ballX, ballY, ballRadius, ballColor);

//         window.requestAnimationFrame(animationLoop);
//     }
//     window.requestAnimationFrame(animationLoop);


// }




let sec = document.querySelector('.section1');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innerText');
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    sec.style.clipPath = `circle(${value}px at center center)`;
    text.style.left = `${100 - value / 6}%`;
    innerText.style.left = `${100 - value / 6}%`;
})
