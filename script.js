
        document.getElementById("mainContent").style.display="block";
    }
},1000);


// Surprise
function startSurprise(){
    document.getElementById("music").play();
    document.getElementById("proposal").style.display="block";
    launchFireworks();
    startSlideshow();
}


// 💌 Premium Love Letter Popup
function showLoveMessage(){

    let letter = 
मेरा प्यार, तुम्हारा जन्मदिन है इसे खास बनाना मेरी पहली प्राथमिकता है।
वैसे ही हमारी प्रेम कहानी भी खूबसूरत और अनमोल है।
तुम्हारी हँसी मेरी जिंदगी की सबसे प्यारी कोडिंग है, और तुम्हारे बिना मेरा जीवन अधूरा है।
इस खास दिन पर, मैं तुम्हें सारी खुशियाँ, प्यार और वो हर सपना पूरा करने का वादा करता हूँ, जो हमारे दिलों में है।
तुम मेरी जिंदगी का सबसे खूबसूरत क्रिएशन हो, और मैं हर पल तुम्हारे साथ रहकर उस प्यार को और भी मजबूत बनाना चाहता हूँ।
हैप्पी बर्थडे मेरी जान, तुम्हारे बिना ये जीवन अधूरा है। ❤️
;

    let box = document.createElement("div");
    box.id="lovePopup";
    box.innerHTML = <div class="letterBox">
                        <h2>For My AJJU 💖</h2>
                        <p id="typedText"></p>
                        <button onclick="closeLetter()">Close 💕</button>
                     </div>;
    document.body.appendChild(box);

    typeWriter(letter);
}

function typeWriter(text){
    let i=0;
    let speed=40;
    let target=document.getElementById("typedText");
    target.innerHTML="";

    function typing(){
        if(i<text.length){
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing,speed);
        }
    }
    typing();
}

function closeLetter(){
    document.getElementById("lovePopup").remove();
}


// Slideshow
let photos = [
"image1.jpg",
"image2.jpg",
"image3.jpg",
"image4.jpg",
"image5.jpg"
];

let current=0;

function startSlideshow(){
    let img=document.querySelector(".slideshow img");
    setInterval(()=>{
        current=(current+1)%photos.length;
        img.style.opacity=0;
        setTimeout(()=>{
            img.src=photos[current];
            img.style.opacity=1;
        },400);
    },3000);
}

// Fireworks
function launchFireworks(){
    const canvas=document.getElementById("fireworks");
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    setInterval(()=>{
        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height/2;
        for(let i=0;i<40;i++){
            ctx.beginPath();
            ctx.arc(x+Math.random()*50-25,y+Math.random()*50-25,3,0,2*Math.PI);
            ctx.fillStyle="white";
            ctx.fill();
        }
        setTimeout(()=>ctx.clearRect(0,0,canvas.width,canvas.height),500);
    },800);
}