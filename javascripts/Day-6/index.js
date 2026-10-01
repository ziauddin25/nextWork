const st = /hello/;
st.test('hello josef!');
console.log(st.test('Hello jose!'));

const ltr = /[abc]/;
console.log(ltr.test('josef absar'));
console.log(ltr.test('abrar alfred!'));
const lwLtr = /[a-z]/;
console.log(lwLtr.test('donald pithu!'));
const word = /\w/;
console.log(word.test('lol'));
const wordd = /\W/;
console.log(wordd.test('popo@')); // here has @.
const digit = /\d/;
console.log(digit.test(9890));
const nonDigit = /\D/;
console.log(nonDigit.test(90 < 200)); // here has <. so, this is true.
const whitespace = /\s/;
console.log(whitespace.test('john doe'));
const non_whitespace = /\S/;
console.log(non_whitespace.test('john'));
const global = /h.t/; // . is a global shorthand class. here execute all digit and word without new line.
console.log(global.test('hot!'));
console.log(global.test('ht'));

// quantifiers: * is 0 or up numbers. 
// + is 1 or up 1 numbers
// ? is 0 or 1. 
// {n} correct n numbers.
// {n,} n or up of n.
// {n,m} n to m. 

const num0 = /a*/;
console.log(num0.test(''));
const num1 = /a+/;
console.log(num1.test(''));
console.log(/a?b/.test('abc'));
console.log(/x{3}/.test('xxxppp')); // true.
console.log(/x{3,8}/.test('xxxxxxxx')); // true.


// Anchors — Position: first has ^ and last $. then execute true. 

console.log(/^hello/.test('lol world!')); // false, here not first hello.
console.log(/world$/.test('lol world')); // true, here has last world.

// Groups — ( ): group adde more characters.

const date = '2026-09-30'.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(date[0]);
console.log(date[1]);
console.log(date[2]);
console.log(date[3]);

//named groups: 

const tdDate = '2026-09-30'.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log(tdDate);
console.log(tdDate.groups.month);


//  Methods — test(), match(), replace()
// test() is check true or false and finally execute boolean data. 
// match() is find the charecters. and execute matching data. 
// replace() is replace of charecters.
console.log('hello world!'.match(/o/d));
const repName = 'hello josef!';
console.log(repName.replace('josef!', 'john doe!'));


// practice: email Validation
const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/*
^              → start
[^\s@]+        → without space and @. others digit or word.
@              → literal @
[^\s@]+        → domain name
\.             → literal dot
[^\s@]+        → TLD.  here have any top level domain uses. like .bd, .net, .com, .org .....
$              → end.
*/
console.log(emailCheck.test('ziauddin009@gmail.com')); // true
console.log(emailCheck.test('ziauddin009@gmail.cm')); // true
console.log(emailCheck.test('ziauddin 009@gmail.com')); // false. here uses space. 
console.log(emailCheck.test('ziauddin009@gmail')); // false. not . here
console.log(emailCheck.test('ziauddin009@gmail.org')); // true

// phone number Validation
const numberCheck = /^01[3-9]\d{8}$/;
/* 
^       → start.
01      → 01 start number.
[3-9]   → 3-9.
\d{8}   → next any 8 digit.
$       → end
total: 11 digit. 
*/
console.log(numberCheck.test('01300896979')); // true
console.log(numberCheck.test('01200896979')); // false. here uses 01 after 2, it's not valid.


// Username Validation: /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/ . 

const usernameCheck = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
console.log(usernameCheck.test('lo09')); // true.
console.log(usernameCheck.test('lo')); // false. maximum 3 chr.
console.log(usernameCheck.test('lo@09')); // false. here has @, it's not valid.

// Password Validation:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.

// 8 char, 1 uppercase, 1 lowercase, 1 digit. Positive Lookahead- it's a condition.
// here ?=. it's a Positive Lookahead. 

/* 
(?=.*[a-z])  → lowercase.
(?=.*[A-Z])  → uppercase.
(?=.*\d)     → digit.
.{8,}        → minimum 8 digit.
*/

const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passwordValid.test('abidlowLove001@'));
console.log(passwordValid.test('abidlowove001@')); // flase. here hasn't any uppercase. 
console.log(passwordValid.test('Li9jk9@')); // false. here hasn't any lowercase.min-8 digit):


// export value func:

const validitions = {
    email: (value) => {
        const logic = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return logic.test(value || 'email isn"t valid');
    },

    password: (value) => {
        const logic = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        return logic.test(value || 'added valid password(one lower case, one upper case, one number and minimum 8 characters).')
    },

    phoneNumber: (value) => {
        const logic = /^01[3-9]\d{8}$/;

        return logic.test(value || 'gives a phone number.');
    },

    userName: (value) => {
        const logic = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;

        return logic.test(value || 'gives a valid user name!')
    }

};

const results = [validitions.email('ziaud098@gmail.com'),
    validitions.password('kkkkkk90'),
];


if (results === true) {
    console.log('valid):');
} else {
    console.log('no valid!');
    
}
