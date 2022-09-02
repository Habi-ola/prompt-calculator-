var w = prompt("Type your first number");
var x = prompt("Type your second number")
var y = prompt("which operation would you like to perform: choose one * for multiplication; + for addition; - for subtraction; / for division")
if (y == "*") {
    let text = Number(w) * Number(x)
    alert(text)
}
if (y == "+") {
    let text = Number(w) + Number(x)
    alert(text)
}
else if (y == "-") {
    let text = Number(w) - Number(x)
    alert(text)
}
else if (y == "/") {
    let text = Number(w) / Number(x)
    alert(text)
}
