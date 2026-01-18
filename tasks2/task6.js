function olderEighteen(people) {
    const adults = people.filter(person => person.age > 18);

    const Names = adults.map(person => person.name);

    return Names;
}

const users = [ 
    {name: 'Антон', age: '40'},  
    {name: 'Антонио', age: '18'}, 
    {name: 'Ботинок', age: '12'},];

const users1 = olderEighteen(users)
console.log(users1)