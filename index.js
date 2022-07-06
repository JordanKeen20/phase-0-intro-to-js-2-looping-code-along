function writeCards(names, whatItIs){
   const thanks = [] 
    for (let i = 0; i < names.length; i++){
        thanks.push (`Thank you, ${names[i]}, for the wonderful ${whatItIs} gift!`)
    }
    return thanks;
}

writeCards(["Guadalupe", "Ollie", "Aki"], 'suprise')

function countDown(){
    let down = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (var i = down.length - 1; i >= 0; i--) {
    console.log(down[i]);
    }
}
