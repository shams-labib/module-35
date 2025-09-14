const arrayOfObject = [
    {name:'redmi', brand: "xioami", price: 40000, color: "black "},
    {name:'redmi', brand: "samsung", price: 40000, color: "black "},
    {name:'apple1', brand: "xioami", price: 40000, color: "black "},
    {name:'apple2', brand: "samsung", price: 40000, color: "black "}
]
// ekhane sudhu jekono ekta man paite gele ami hoytoba age loop calay kortam, mela kahini kore kortam, but ekhn ekhane MAP() thakar karone ami ek line e onk sohojei ei kaj ta korte parbo

// const result = arrayOfObject.map(mapping => mapping.name);
// console.log(result)

// suppose ami oprer array of object theke sudhu oi phone guloi casci jegulor brand hosce apple, eta korar jonno khub sundor vabe filter use kore kaj korte pari

const result = arrayOfObject.filter(product => product.brand === "samsung");
console.log(result)