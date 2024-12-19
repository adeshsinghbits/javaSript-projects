let NumberAllow = document.querySelector("#numbercheckbox")
let CharacterAllow = document.querySelector("#charcatercheckbox")

function checkCheckbox() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllow.checked && CharacterAllow.checked) {
        str +="0123456789!@#$%^&*()_+|?><."
    } else if(!NumberAllow.checked && CharacterAllow.checked) {
        
        str += "!@#$%^&*()_+|?><."
    } else if (NumberAllow.checked && !CharacterAllow.checked) {
        str += "0123456789"
    } else if (!NumberAllow.checked && !CharacterAllow.checked) {
        str = str.slice(0,54)
    }

    return str;
    
}
function generatePassword() {
    str = checkCheckbox();
    let pass = ""
    let lengthChoose = document.getElementById('length').value;
    document.querySelector("#lengthslide").innerText =  `length: ${lengthChoose}`
    console.log(lengthChoose);
    
    for (let i = 0; i <=lengthChoose; i++) {
        let chr = Math.floor(Math.random() * str.length +1)
        pass += str.charAt(chr)
        }
    console.log(pass);

    document.getElementById("result").value =  `${pass}`

}

function copyPass() {
    const textToCopy = document.getElementById("result");
    textToCopy?.select();
    navigator.clipboard.writeText(textToCopy.value);
}
window.onload = generatePassword()