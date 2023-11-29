const drumkit = document.getElementById('drumkit')
const items = ['snare', 'kick', 'hihat', 'openhat', 'ride', 'tom', 'clap', 'tink', 'boom']
console.log(drumkit)

const playAudio = (elementID) => {
    console.log(`playing ${elementID}`)
    const audio = new Audio(`./sounds/${elementID}.wav`)
    audio.play()
}
// items.forEach(element => {
//     let x = document.createElement('span')  
//     x.className = "sound"
//     x.id = element
//     x.textContent = element
//     drumkit.appendChild(x)
// });

