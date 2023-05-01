// Export as you go syntax
module.exports.items = ['item1', 'item2'];
// This above line can be exported as module.exports.items = ['item1, item2']
// instead of module.exports = items. That just makes the code more readable and concise that's it.
const person = {
    name: "Ash"
}
// And to export person we can write
module.exports.singlePerson = person
// Here we are assigning person object to a singlePerson property.
// Now this singlePerson property can be used to access person object.
// We can always export using just module.exports = person
// But we might encounter this type of syntax.
