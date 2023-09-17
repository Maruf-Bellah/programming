// Fabonacchi problem solved ==========================

// var num = 100;

// var x = 0; 
// var y = 1;

// var fn = x + y;

// console.log(x);
// console.log(y);
// while(fn <= 100){
//   fn = y + x;
//   x = y 
//   y = fn

//   console.log(y);
// }


// Namota problem solved================================
function myFunction(){
    
    var lastStr=prompt("Number Koto theke shuru korben ?");
    var lastNum= parseInt(lastStr);
    var number=" " ;
    
    var chooseStr=prompt("Number koto theke sesh korben ?");
    var chooseNum= parseInt(chooseStr);
    var number=" " ;



    for(let i = lastNum; i <= chooseNum; i++){
        document.write(`${i} er Namota`+ "<br>")
        document.write(" ")
    for(let j = 1; j <= 10; j++){
            number = (`${i} * ${j} =  ${j * i}`)+ "<br>";
            document.write(number)
            }
    }

}





    // for(let i = 1; i <= 10; i++){
    //     console.log(`
    //       ${i} = er Namota
    //         `);
        
    //         for(let j = 1; j <= 10; j++){
    //         console.log(`${i} * ${j} =  ${j * i}`);
    //         }
    // }



    let show1 = '';

    for(let i = 5; i > 0 ; i--){
        for(let j = 5; j > i; j--){
            // console.log(i);
           show1 -= ('*')
            // console.log(i);
            // document.getElementById('text').innerHTML = show;
            // console.log(show1);
        }
    
    }

    // console.log('amr sonar bangla');



// function Persons(first, last , age){
//     this.firstName = first,
//     this.lastName = last, 
//     this.age = age ;
//     function fullName(){
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// const maruf = new Persons('Maruf', 'Bellah', 56);
// const rasel = new Persons('Rasel', 'Hasan', 50);

// console.log(maruf);
// console.log(rasel);
