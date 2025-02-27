const input = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const btn = document.querySelector(".btn");
const alertContainer = document.querySelector(".alert-container");

btn.addEventListener("click", () => {
    createPassword();
});

copyIcon.addEventListener("click", () => {
    copyPassword();
    if(input.value){
        alertContainer.classList.remove("active");
        setTimeout(() => {
            alertContainer.classList.add("active");
        }, 2000);
    }
});

function createPassword(){
    const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 10;
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.slice(randomIndex, randomIndex + 1);
    }

    input.value = password;
}

function copyPassword(){
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
}