
let rndno1=-1;
let rndno2=-1;
let img1=document.querySelector(".img1")
img1.addEventListener('click',()=>{
    rndno1=Math.floor(Math.random() * 6)+1;
var audio=new Audio('mixkit-arcade-retro-game-over-213.wav')
audio.play();
    console.log(rndno1);
    img1.src=`images/dice${rndno1}.png`;
    let title=document.querySelector("h1");
if(rndno1>rndno2)
{
    title.textContent='Player 1 is winner ';
}
if(rndno1<rndno2)
{
    title.textContent='Player 2 is winner';
}
if(rndno1==rndno2)
{
    title.textContent='Draw';
}
});


let img2=document.querySelector(".img2")
img2.addEventListener('click',()=>{
    rndno2=Math.floor(Math.random() * 6)+1;

    // console.log(rndno2);
    img2.src=`images/dice${rndno2}.png`;
    let title=document.querySelector("h1");
if(rndno1>rndno2)
{
    title.textContent='Player 1 is winner ';
}
if(rndno1<rndno2)
{
    title.textContent='Player 2 is winner';
}
if(rndno1==rndno2)
{
    title.textContent='Draw';
}
});
console.log("rnd1"+rndno1)
console.log("Rndd2"+rndno2)
