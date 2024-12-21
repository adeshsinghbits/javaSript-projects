let pass = document.getElementById("pass");
let bg = document.querySelector(".container");
let bar = document.querySelector(".bar")

pass.addEventListener("input", (event) => {
    const value = event.target.value
    // console.log(value);

    length = value.length
    blur = 13
    blur = blur-length
    // console.log(length);

    bg.style.filter= `blur(${blur}px)`
    // console.log(blur);

    barLength =  9*length
    console.log(barLength);
    
    bar.style.width = `${barLength}%`

    if (length <= 5) {
        bar.style.background =  "red"
    } else if (length <= 10) {
        bar.style.background =  "yellow"
    } else {
        bar.style.background =  "green"
    }
    
})