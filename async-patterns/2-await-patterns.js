const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try {
    const first =  await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    writeFile('./content/result-new.txt', `This is new and awesomesssss: ${first} ${second}`)
    console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
console.log("I run first")

// Okay so the doubt I have been having in my mind for a long time is, 
// if the second function's execution is dependent on the completion of the
// first, then what is the point of us writing the fs-async code in
// in this way.

// I think I have an answer to that,
// First of all we this code is much more readable
// Second, I think we want file one to be read first and file second to be read
// second, and only after that the third file should be edited.
// But I am not sure


// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
        
//     })
// }


// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


