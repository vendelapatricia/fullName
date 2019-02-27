const fs = require('fs');


const first = './firstName.txt';
const last = './lastName.txt';
const full = './fullName.txt';


let options = {
    encoding: 'utf8', 
    flag: 'r'}; 



fs.readFile(first, options, (err, firstData) => {
    if (err) {
        console.error(err);
    } 
    else {
        console.log("Första filen lyckades");
    } 

    fs.readFile(last, options, (err, lastData) => {
        if (err) {
            console.error(err);
        } 
        else {
            options.flag = 'w';
            console.log("Andra filen lyckades");
        } 
        
        fs.writeFile (full, firstData + ' ' + lastData, options, (err) => {  // skicka in det i en helt ny .txt fil
            if (err) {
                console.error(err);
            } 
            else {
                console.log("Alla filer lyckades");
            }
        })
    })
})
