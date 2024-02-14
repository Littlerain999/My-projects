// message for music

alert('click the anime pic to play music')

// Audio Section

const audioSection = document.getElementById('audio-section')

function musicPlayer() {
    const html = `<audio src="audio/Oneheart - snowfall (Ghost).mp3" autoplay loop></audio>`
    audioSection.innerHTML = html
}

const musicPlayerBtn = document.getElementById('MusicPlayer')

function musicPlayerBtnOnClick() {
    const condition = musicPlayerBtn.classList.contains('On')
    musicPlayerBtn.classList.toggle('On')
    if (!condition) {
        musicPlayer()
    } else {
        audioSection.innerHTML = ''
    }
}

musicPlayerBtn.onclick = musicPlayerBtnOnClick

// Password Section

const alphabets = 'abcdefghijklmnopqrstuvwxyz'
const alphabetsArray = alphabets.toLocaleUpperCase().split('')

let result = '';

function passCreate() {
    for(let i = 0; i < 10; i++) {
        const chance = Math.floor(Math.random() * 2)
        if (chance === 0) {
            const number = Math.floor(Math.random() * 10)
            result += String(number);
        } else {
            const alphabet = alphabetsArray[Math.floor(Math.random() * alphabetsArray.length)]
            result += alphabet
        }
    }
}

passCreate()

// Password Transfer To Display Section

const messageDisplayer = document.querySelector('.message-displayer')

function displayPass() {
    
    const message = `<p>"<span class="pass">${result}</span>" is your password</p>`
    
    messageDisplayer.innerHTML = message
}

displayPass()

// Password Check Section

const inputBar = document.getElementById('js-password-input')
const enterButton = document.getElementById('enter-Input-btn')
const link = document.getElementById('link-js')

inputBar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkValue();
    }
})

enterButton.onclick = checkValue

function checkValue() {
    if (inputBar.value === result) {
        link.click();
    } else if (inputBar.value === '') {
        alert('Enter A Password')
    } else {
        inputBar.value = '';
        alert('Incorrect Password')
    }
}

const messageDisplayBtn = document.getElementById('display-activator');

messageDisplayBtn.onclick = () => {
    messageDisplayer.classList.toggle('active')
}

// Password Renew Section

const renewBtn = document.getElementById('renew-pass');

renewBtn.onclick = () => {
    result = ''
    passCreate()
    displayPass()
    messageDisplayer.classList.add('active')
}