const animals =[
    {
    name: "crab",
    scientificname:"Brachyura",
    environment: ["ocean","freshwater","beaches","supermarkets"],
    skeleton:false,
    exoskeleton:true,
    },
    {
    name:"clam",
    scientificname:"Bivalvia",
    environment:["ocean","freshwater","mud flats","supermarkets"],
    skeleton:false,
    exoskeleton:true, 
    },
    {
    name:"dog",
    scientificname:"Canis Lupus Familiaris",
    environment:["domestic","urban","forests","brush lands"],
    skeleton:true,
    exoskeleton:false,
    },
    {
    name:"cat",
    scientificname:"Felis Catus",
    environment:["domestic","urban","mountains","barns"],
    skeleton:true,
    exoskeleton:false,
    },
    {
    name:"frog",
    scientificname:"Anura",
    environment:["freshwater","desert","forests","Labs"],
    skeleton:true,
    exoskeleton: false,
    },
    {
    name:"chimpanzee",
    scientificname:"Pan Troglodytes",
    environment:["jungle","woodlands","grasslands","rainforest"],
    skeleton:true,
    exoskeleton: false,
    },
]
animals.forEach(animal=> {
    console.log(animal.name)
});
animals.forEach(animal => {
    animal.environment.forEach(habitat=>{
     console.log(habitat)   
    })   
});
animals.filter(animal =>{
animal.skeleton===true
});