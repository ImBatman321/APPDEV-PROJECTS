//components for item number 1
const bnt1 = document.getElementById("bnt1")
bnt1.addEventListener("click", () =>{
    // populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x = 'Hello! ${name}, I see that you are from ${address} and you are also pursuing your degree with ${major} and has a telephone number ${telephone}.'
    document.getElementById("output").innerHTML = x

})