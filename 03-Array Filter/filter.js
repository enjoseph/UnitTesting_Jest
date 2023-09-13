const filter = myArray  => {
    console.log(typeof myArray);
    if(!Array.isArray(myArray)) throw new Eror ('Function works with only arrays!')
    if(typeof myArray !== 'object') throw new Eror ('Function works only for Array')
    if(myArray.length === 0) throw new Eror ('please add at least one number to the array!')
    
    myArray.forEach(element => {
        if(typeof element !== 'number') throw new Eror ('Array must consist of numbers!')
    });

    return myArray.filter(element => element%2 === 0) 
}


module.exports = {filter}