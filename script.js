let arr = [
    {
        name: 'redbull',
        price: 15000
    },    
    {
        name: 'adrenaline',
        price: 12000
    },    
    {
        name: 'cola',
        price: 10000
    },    
    {
        name: 'fanta',
        price: 10000
    }
]
let search = prompt('Какие напитки вы хотите?')
let finded = arr.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))[0]
document.write(`
    name: ${finded.name} <br>
    price: ${finded.price}
    `)
console.log();