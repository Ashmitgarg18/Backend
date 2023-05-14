const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() =>{
    try {
    const first =  await readFile('./content/first.txt', 'utf8')
    // writeFile('./content/result-new.txt', `This is new and awesomesssss: ${first} ${second}`)
    console.log(first)
    } catch (error) {
        console.log(error)
    }
}

const start1 = async() =>{
    try {
        const second = await readFile('./content/second.txt', 'utf8')
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}

start()
start1()
console.log("I run first")

// So I wrote the reading of the 2 files seperately, now if I do not await for the first function to be resolved, it does not wait for it 
// and returns whatever it has.