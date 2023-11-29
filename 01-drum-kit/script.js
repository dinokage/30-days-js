const drumkit = document.getElementById('drumkit')
const items = ['SNARE', 'KICK', 'HIHAT', 'OPENHAT', 'RIDE', 'TOM', 'CLAP', 'TINK', 'BOOM']
console.log(drumkit)

items.forEach(element => {
    let x = document.createElement('span')
    x.className = "sound"
    x.textContent = element
    drumkit.appendChild(x)
});
