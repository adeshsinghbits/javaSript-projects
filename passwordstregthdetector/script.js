let pass = document.getElementById("pass");
let bg = document.querySelector(".container");

pass.addEventListener("input", (event) => {
    const value = event.target.value
    // console.log(value);

    length = value.length
    blur = 20
    blur = blur-length
    // console.log(length);

    bg.style.filter= `blur(${blur}px)`
    console.log(blur);
    
})