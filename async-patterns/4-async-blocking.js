const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try {
    const firstPromise = new Promise(() => {});
    const first =  await firstPromise
    const second = await readFile('./content/second.txt', 'utf8')
    writeFile('./content/result-new.txt', `This is new and awesomesssss: ${first} ${second}`)
    console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
console.log("I run first")

// So here the first promise is never resolved and 
// that is why neither the reading of the second file
// is done nor the writing of the third file

