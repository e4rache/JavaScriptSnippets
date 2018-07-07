/*
    promises
    Video Tutorial : 
        [techsith] https://www.youtube.com/watch?v=s6SH72uAn3Q
        [Fun Fun Function] https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
        [The Coding Train] https://www.youtube.com/watch?v=QO4NXhWo_NM
        [The Coding Train] https://www.youtube.com/watch?v=AwyoVjVXnLk
*/

/*
new Promise((resolve, reject) => {

})
*/

let cleanRoom = function() {
    return new Promise( function( resolve, reject) {
        resolve( 'Cleaned the room'); // returns a message to be used in the next promise
    })
}


// room needs to be cleaned before removing the garbadge
let removeGarbage = function(message) {
    return new Promise( function( resolve, reject) {
        resolve( message + ' | removed Garbage')
    })
}

// icecream can be won if room has been cleaned and garbadge removed
let winIcecream = function(message) {
    return new Promise( function( resolve, reject) {
        resolve( message + ' | won Icecream')
    })
}


cleanRoom().then( function( result) {
    return removeGarbage( result)
}).then( function( result) {
    return winIcecream( result)
}).then( function( result) {
    console.log( 'finished | ' + result)
})
// do the same with Promise.all([])
let p = Promise.all( [
    cleanRoom(),
    removeGarbage(),
    winIcecream()
 ]).then( function() {
     console.log(' all finished.')
 })

 // ***** Wraping a function (setTimeout) into a Promise

 function setup() {
 
 }

 function delay(time) {
     return new Promise( (resolve, reject) => {
        if ( isNaN( time)) {
            reject(new Error('time is not a number'))
        } 
        setTimeout( resolve, time)
     })
 }

 delay(1000)
 //delay('test')  // throws a custum error
    .then(() => console.log('Hello'))
    .catch( error => console.error( error) )