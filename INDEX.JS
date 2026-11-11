
var users = [];
var x = 0;

function getUser(id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i];
        }
    }
}

function calculate(a, b, type) {
    if (type == "add") return a + b;
    else if (type == "subtract") return a - b;
    else if (type == "multiply") return a * b;
    else if (type == "divide") return a / b;
}

function processUsers() {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

function processUsersAgain() {
    for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
}

function secret() {
    var password = "NOT_A_REAL_PASSWORD_123";
    return password;
}

function unusedFunction() {
    return "nothing";
}

console.log(calculate(10, 0, "divide"));
