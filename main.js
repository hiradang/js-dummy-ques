/* The differences between let and var*/

/**  Question 1.
    let a = 'Hira Dang';
    console.log(a);

    let a = 'Binh Dang';
    console.log(a); // -> error


    var a = 'Hira Dang';
    console.log(a);

    var a = 'Binh Dang';
    console.log(a); // -> okay

*/


/** 2. Question 2
    let a = 'Hira Dang';
    let b = 'Binh Dang';

    console.log(window.a);
    console.log(window.b);


    //fyi, window is the root object of JS, 
    // represents the brower's window
    // contains all global functions, objects and variables (even the DOM document)
 */ 



/* Variable name */


/** Question 3
Choose the right variable names in Javascript
    var $$$$ = 15;
    var _test = 15;
    var abc3 = 15;
    var 2trieuNam = 15;
    var HọvàTên = 15;
    var a22222 = 15;
    var ___$$$1112  = 15;
    var text-title = 'HiraDang';


    //fyi, JS variable names are made from letter, numbers, $ and _
    // they cant start with a number.
    // They do not always has to be English
*/


/* Variable declaration */

/* Question 4
    function foo() {
        console.log(num);
        var num = 11;
        console.log(num);
    }


    function foo2() {
        console.log(num);
    }

    function foo3() {
        consol.log(num);
        var num;
    }

    //fyi, variables always be defined before any code is executed,
    // which is known as var hoisting
    // but hoisting just affect the variable declaration, not value's initialization

    //The above code can be implicitly understood as:
    // var num; -> undefined (not error)
    // console.log(num);
    // var num = 11; -> 11
    // consolo.log(num);

 */


/* Question 5
    var x = 0;
    function f() {
    var x = y = 1; 
    }
    f();

    console.log(x, y);


    // y is declared globally (before the line var x = 0 runs)
*/



/* Question 6: Destructing assignment
    let a, b, rest;
    [a, b] = [10, 20];

    console.log(a);
    console.log(b);

    [a, b, ...rest] = [10, 20, 30, 40, 50];

    console.log(rest);

*/


/* Operators */


/* Question 7: 

    console.log(4**3);


    //fyi, ** operator is used to perform exponentiation (ES6)
*/


/* Postfix and prefix increment (decrement) */


/* Question 8:
    var a = 2;

    console.log(a--); 
    console.log(a++); 
    console.log(--a);
    console.log(++a);


    //Explanation:
    //console.log(a--);  a = 1, return a copy = 2;
    //console.log(a++);  a = 2, return a copy = 1;
    //console.log(--a);  a = 1, return a = 1;
    //console.log(++a);  a = 2, return a = 2;

    //Fyi, x++   postfix increment increments 1 and return value BEFORE incrementing.
    //     x--    prefix increment increments 1 and return value AFTER incrementing.

*/


/* Question 9: One more question about prefix/postfix increment
    
    var a = 10;

    console.log(a++ - 2 * --a);

*/

/* Question 10: 
    console.log(false + 1);
    console.log(true + true);
    console.log(true * 5 + false * 4);


    //fyi, boolean values in arithmetic expressions are treated just like numbers
    // true = 1, false = 
*/
