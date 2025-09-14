const arrayOfObject = [
    {name:'redmi', brand: "xioami", price: 40000, color: "black "},
    {name:'redmi', brand: "samsung", price: 40000, color: "black "},
    {name:'apple1', brand: "xioami", price: 40000, color: "black "},
    {name:'apple2', brand: "samsung", price: 40000, color: "black "}
];

const newMal = {
    name:"nokia", brand:"tesla", price: 500, color: 'golden'
}

const filter = arrayOfObject.filter(p => p.brand!=="xioami")
console.log(filter);

const adding = [...filter, newMal];
console.log(adding);