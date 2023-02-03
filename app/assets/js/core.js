
function printColor(color) {
    console.log(color)
    const r = parseInt(color.substr(1, 2), 16)
    const g = parseInt(color.substr(3, 2), 16)
    const b = parseInt(color.substr(5, 2), 16)
    const result_rgb = document.getElementById("result-rgb")
    const result_hex = document.getElementById("result-hex")
    while(result_rgb.firstChild)result_rgb.removeChild(result_rgb.firstChild)
    const red = document.createElement('span')
    red.classList.add('red')
    red.textContent = `R: ${r}`
    result_rgb.appendChild(red)

    const green = document.createElement('span')
    green.classList.add('green')
    green.textContent = `G: ${g}`
    result_rgb.appendChild(green)

    const blue = document.createElement('span')
    blue.classList.add('blue')
    blue.textContent = `B: ${b}`
    result_rgb.appendChild(blue)

    // result_rgb.textContent = `R: ${r}, G: ${g}, B: ${b}`;
    result_hex.textContent = color
}
document.getElementById('pick-color').addEventListener('input',e => printColor(e.target.value))