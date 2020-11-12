let readlineSync = require('readline-sync');
const userName = readlineSync.question('What is your name? ');
console.log(`\nWelcome ${userName}!`);
food = ['UK breakfast with beans', 'Goblin juice', 'Steve from Minecraft', 'Toad milk']
index = readlineSync.keyInSelect(food, 'May I offer you any delicacies? \n\nChoose wisely, we will decide your fate on your decisions.')
if(index == 0) {
console.log(`Hey ${userName}, the bean machine is broken`)
}
else if(index == 1) {
    console.log('Ah YEES')
}
else if(index == 2) {
    console.log(`You made the right decision ${userName}`)
}
else if(index == 3) {
    console.log(`Interesting choice ${userName}`)
}
else {
    console.log('No delicacies for you, goodbye.')
    }
weapon = ['Garfield', "Mark Zuckerberg's sunscreen"]
index = readlineSync.keyInSelect(weapon, 'Choose a weapon')
if(index == 0) {
    console.log('He brought lasagna ')
}
else if(index==1) {
    console.log('Powerful stuff ')
}
action = ['Offer to fix the bean machine', 'Steal the crown', 'Make him drink the goblin juice', 'Run away']
index = readlineSync.keyInSelect(action, 'Oh no! The frog king is awake. What will you do?\n\n')
if(index == 0) {
    console.log('Wise decision. We have decided to take you in as one of our own. Congratulations 💞');
}
else if(index == 1) {
    console.log('Frog king steps on you :( ');
}
else if(index == 2) {
    console.log('The frog king has turned into a goblin and devoured your weapon of choice. You must leave now. 👿')
}
else {
    console.log("Sometimes you just have to face your fears. Come back whenever you are ready. ");
}
