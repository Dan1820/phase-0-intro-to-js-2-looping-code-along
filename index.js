// Code your solutions in this file
// const gifts=['teddy','drone','doll'];
// function wrap(gift){
//     console.log(`wrapped ${gift} and added a bowl`);
// }
// console.log(wrap(gifts[0]))
// console.log(wrap(gifts[1]))
// console.log(wrap(gifts[2]))

// for (let age=30; age<40;age++){
//     console.log(`I am ${age} years old. Happy birthday to me`);
// }
// const gifts=['teddy bear','drone','doll'];
// function wrapGift(gifts){
//     for (let i=0; i<gifts.length;i++){
//         console.log(`wrapped ${gifts[i]} and added a bowl!`)
//         debugger;
//     }
//     return gifts;
// }
// console.log(wrapGift(gifts));

const friends=["Guadalupe", "Ollie", "Aki"]
function writeCards(friend){
    // const friend={...friends}
    // friend={...friends}
    let message=[]
    for (let i=0; i<friend.length;i++){
        message.push(`Thank you, ${friend[i]}, for the wonderful surprise gift!`)
        // debugger;
    }
    return message;
}
function countDown(name){
    while(name>0){
        console.log(name)
        name--
    }
    console.log(name)
}
// console.log(writeCards(friend));

