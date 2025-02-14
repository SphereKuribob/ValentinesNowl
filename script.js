document.addEventListener("DOMContentLoaded", function () {

    /* Stolen falling heart code lmao */
    function createHeart(emoji) {
        const heart = document.createElement("div");
        heart.innerText = emoji;
        heart.classList.add("heart");

        document.body.appendChild(heart);

       
        heart.style.left = Math.random() * 100 + "vw";

   
        const duration = Math.random() * 3 + 2; // 2s - 5s
        heart.style.animation = `fall ${duration}s linear`;

   
        const size = Math.random() * 20 + 10; // 10px - 30px
        heart.style.fontSize = size + "px";

      
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    /*image array */
    const images = [
        './images/her/one.jpg',
        './images/her/two.jpg',
        './images/her/three.jpg',
        './images/her/four.jpg',
        './images/her/five.jpg',
        './images/her/six.jpg',
        './images/her/seven.jpg',
    ];

    /*button functions */

    const buttonOne = document.getElementById("yes");
    const buttonTwo = document.getElementById("no");
    const gif = document.getElementById("bear");
    const head = document.getElementById("header");
    const audio = document.getElementById("yay");
    audio.volume = 0.1;
    const audioTwo = document.getElementById("sad");
    audioTwo.volume = 0.8;
    const audioThree = document.getElementById("hap");
    audioThree.volume = 1.0;
    const audioFour  = document.getElementById("dame");
    audioFour.volume = 0.5;

    let initialHeartInterval; // Declare interval variables
    let yesHeartInterval;
    let noHeartInterval;
    let imageInterval;

    console.log(buttonOne);
    console.log(gif);

    /* image randomness */

    function startRandomImages () {
        imageInterval =  setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);  // Correctly using images.length
            gif.setAttribute('src', images[randomIndex]);
        }, 5000);
    }

    /*begin emoji fall */

    function stopAllHeartIntervals() {
        clearInterval(initialHeartInterval);
        clearInterval(yesHeartInterval);
        clearInterval(noHeartInterval);
    }

    // Create the initial heart falling effect
    function startInitialHeartCreation() {
        initialHeartInterval = setInterval(() => {
            createHeart("❤️"); // Initial heart emoji falling
        }, 300);
    }
    
    // Create hearts for the "YES" button with hearts
    function startYesHeartCreation() {
        yesHeartInterval = setInterval(() => {
            createHeart("💜");
            createHeart("💜");
            createHeart("💜");
        }, 300);
    }
    
    // Create hearts for the "NO" button with sad emojis
    function startNoHeartCreation() {
        noHeartInterval = setInterval(() => {
            createHeart("😥");
            createHeart("🙄");
            createHeart("😔");
        }, 300);
    }
    

    buttonOne.addEventListener('click', () => {
        stopAllHeartIntervals();
        gif.setAttribute('src', './images/hug.gif');
        head.innerText = "YAY! I LOVE YOU BOO BOO BEAR!!!"
        startYesHeartCreation();
        audioThree.play();
        audio.play();
        audioFour.pause();
        audioTwo.pause();

        startRandomImages();
    });
    
    let clickCount = 0;
    buttonTwo.addEventListener('click', () => {
        audioTwo.play();
        audioFour.play();
        clickCount++;
        stopAllHeartIntervals();
        clearInterval(imageInterval);
        gif.setAttribute('src', './images/cry.gif');
        head.innerText = ":( Whatver then,,,,,,,"
        startNoHeartCreation();
        let scale = 1 - (clickCount * 0.1);
        buttonTwo.style.transform = `scale(${scale})`;
        audio.pause();
        audioThree.pause();

    });

   startInitialHeartCreation();
});
