// // // // // // console.log('hello world');

// // // // // // //variable
// // // // // // var a='sanohit madaan';
// // // // // // console.log(a);

// // // // // // //data types
// // // // // // console.log(typeof(a));
// // // // // // var a=7;
// // // // // // console.log(typeof(a));
// // // // // // var b=true;
// // // // // // console.log(typeof(b));

// // // // // // //challenge
// // // // // // console.log(3**3);
// // // // // // console.log(5+'Madaan');

// // // // // // swap two number
// // // // // var a=5;
// // // // // var b=10;
// // // // // var c=b;
// // // // // b=a;
// // // // // a=c;
// // // // // console.log("the vale of a is :" +a);
// // // // // console.log("the value of b is :"+ b);

// // // // // // without using third variable
// // // // // var a=5;
// // // // // var b =10;
// // // // // a=a+b;
// // // // // b=a-b;
// // // // // a=a-b;
// // // // // console.log("a is :"+a);
// // // // // console.log("b is :"+b);

// // // // // leap year
// // // // var a=2020;
// // // // if (a%4==0){
// // // //     if(a%100==0){
// // // //         if(a%400==0){
// // // //             console.log("The year "+a+" is a leap year");
// // // //         }
// // // //         else{
// // // //         console.log("The year "+a+" is a leap year");
// // // //     }
// // // //     }
// // // //     else{
// // // //         console.log("The year "+a+"is  a leap year");
// // // // }
// // // // }

// // // // else{
// // // //     console.log("The year "+a+"is not a leap year");
// // // // }

// // // // //switch cases 
// // // var area='square';
// // // var pi=3.14,l=2,b=2,r=2;

// // // switch(area){
// // //     case 'circle':
// // //         console.log("The area of circle is :"+ pi*r**2);
// // //         break

// // //         case 'rectangle':
// // //             console.log("the area of rectangle is: "+(l*b));
// // //             break

// // //             case 'triangle':
// // //                 console.log("the area of triangle is: "+(l*b)/2);
// // //                 break

// // //                 default:
// // //                     console.log("enter the valid data");
// // // }

// // //table for 8,9 using for loop
// // var a;
// // var table=9;
// // for(a=1;a<=10;a++)
// // {
// //     console.log(table +"*"+a+"="+table*a);
// // }

// // Default parameter

// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5,12)); // in case we give only one parameter then it will by default take the value of b 


// Array in javascript

var a=['Sanohit','Gurtej','Nikhil','Pranav','Chonnu'];
// console.log(a[0]);  //Indexing
// console.log(a.length);  //Length
// console.log(a[a.length-1]);  //Last element

// for(var i=0;i<a.length;i++){
//      console.log(a[i]);
// }

// for(let element in a)
// {
//     console.log(element);
// }

// for(let element of a){
//     console.log(element);
// }

// a.forEach(function(element,index,array){
//     console.log(element +": "+index + array );
// })


//map method of arraay
// const arr=[1,2,4,9,12,15];
// let newArr=arr.map((curEle,index,arr)=>{
//     return `Index no ${index} having value ${curEle} belong to the array${arr}`
// })

// console.log(newArr);

