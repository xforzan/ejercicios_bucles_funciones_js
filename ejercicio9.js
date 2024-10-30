const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  
let oldyear= Infinity
let index = 0

  function findOldestXMen(xMen) {
    for (let i = 0; i <= xMen.length; i++) {
        if (i === xMen.length) {
            return(xMen[index]);
        } else if (xMen[i].year < oldyear) {
            oldyear = xMen[i].year;
            index = i
        }
    }
  }

  console.log(findOldestXMen(xMen))