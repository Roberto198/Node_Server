const fs = require('fs');
 const path = require('path');

// //create a folder
// // fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
// //     if(err) throw err;
// //     console.log('Folder Created')
// // })

// //Create and write to file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err =>{
//     if(err) throw err;
//     console.log('File written to');
// //apppend file used as callback function inside writefile fuction
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node.js', err =>{
//     if(err) throw err;
//     console.log('File written to')
// })

// })

//create a folder

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
//     if(err) throw err;
//     console.log(data)
// })

//Rename a file


//create a folder
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'goodbye.txt'), err =>{
    if(err) throw err;
    console.log('FileRenamed')
})