// console.log(errll); // refError. 
// console.log(null.name); // typeError.
// console.log(Array(-1)); // rangeError
// console.log(JSON.parse('lol')); // syntaxError.


// tryCatch. finally):
function parseInput (json) {
    try {
        const res = JSON.parse(json);
        console.log(res);
        

        return res;
        
    } catch (error) {
        console.log(error.message);
        
    }

    finally{
        console.log('parse input data is success!');
    }
}

parseInput('{"name": "John Doe"}');
// parseInput('john'); // showing a error.

// throw: new error throw for using throw.
function sum (a,b) {
    if (a === 0) {
        throw new Error ('matai nosto):');
    }

    const sum = a * b;
    console.log(sum);
    
    return sum;
}

sum(5, 6);
// sum(0, 5);

// custom error: customlly error handiling and showing custom message. here name, stack, message. 

class validitionError extends Error {
    constructor (message, statusCode ) {
        super(message);
        this.name = 'validitionError';
        this.statusCode = statusCode;
    }
};

function ageCount (age) {
    if (age < 18) {
        throw new validitionError("age is under 18!", 69);
    }

    return 'you"re adult!';
}

// ageCount(17); // here showing validitionerror.

try {
    ageCount(69);
} catch (error) {
    if (error instanceof validitionError) {
        console.log(`error name: ${error.name} error status code: ${error.statusCode}`);
    } else {
        console.log(error.message);
        
    }
}

// validate email:

function validitionEmail (email) {
    if (!email) {
        throw new validitionError('give a real email', 'email');
    }

    if (!email.includes('@')) {
        throw new validitionError('added @', 'email');
    }

    return true;
}


function validatePassword(password) {
    if (password.length < 8) {
        throw new validitionError(`Password must be at least 8 characters long (provided: ${password.length})`, 'password');
    }

    return true;
};


try {
    validitionEmail('lolo@gmail.com');
    validatePassword('00090');
} catch (error) {
    if (error instanceof validitionError) {
        console.log(error.message);
        
    }
}


async function A() {
    throw new Error("new error from A");
};

async function B() {
    try {
        await A();
    } catch (error) {
        console.log(error.message);
        throw new Error("new error from B");
    }
};

async function Main() {
    try {
        await B();
    } catch (error) {
        console.log('new error from main.',error.message);
        // throw new Error("new error from main.");
    }
};

Main();