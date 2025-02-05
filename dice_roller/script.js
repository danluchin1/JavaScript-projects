function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const imageResult = document.getElementById("imageResult");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    imageResult.innerHTML = images.join('');
}

