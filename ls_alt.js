/*
NodeJS implementation of 'ls' (list files in Unix et al)

*/
const fs = require('fs');

fs.readdir('./', (err, files) => {
    if (err) {
        console.log("error");
    };
    // to find the length of an object you call .keys() on it, this
    // creates an array with all objects names
    var lengthArray = Object.keys(files).length;

    for (i = 0; i < lengthArray; i++) {
        //statSync shows information about a file
        var t = fs.statSync(`./${files[i]}`);
        var tm = t.atime.toString().split('G');

        console.log(`${files[i]} \t ${t.size}b \t ${tm[0]}`);
     }
});
