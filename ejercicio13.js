const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  
  var fecha = new Date()
  var year = fecha.getFullYear()
  const actorsBirth = []


  function calculateActorsAges(actors) {
    for (let i= 0; i<actors.length; i++){
        const actor = {
            name: actors[i].name,
            age: year - actors[i].born
        }
        actorsBirth.push(actor)
    }
    return actorsBirth
  }
  
  console.log(calculateActorsAges(actors))