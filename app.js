const slot = document.querySelector('.container-slot')
const btn = document.querySelector('.btn-confetti')
const emojis = ['🌲', '☘️', '🍂', '🍀']
const special = ['🎁']

btn.addEventListener('click', fiesta)

function fiesta(){

    let length = Math.floor(Math.random() * emojis.length)

    if (length !== 1) {

        for (let i = 0; i < 50; i++){

        const emoji = document.createElement('div')

        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]

        slot.appendChild(emoji)

        animateEmote()

    } 

    // Si length n'est pas === a 1 alors envoyer cadeau

 } else {

    for (let i = 0; i < 50; i++){

        const emoji = document.createElement('div')

        emoji.innerHTML = special[Math.floor(Math.random() * special.length)]

        slot.appendChild(emoji)
        
        animateEmote()
 }
     
    
    }

    // Vérification Chiffre
    console.log(length)
}


// Animation GSAP

function animateEmote(){

    TLCONF = gsap.timeline()

    TLCONF
    .to('.container-slot div', {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        z: 'random(0, 1200)',
        rotation: 'random(-99, 99)',
        duration: 1
    })
    .to('.container-slot div', {autoAlpha: 0, duration: 0.2}, '-=0.2')
    .add(() => {

        slot.innerHTML = '';

    })

}