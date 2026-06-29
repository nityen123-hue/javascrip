var mydata = document.querySelector('div').innerText;
document.querySelector('div').innerHTML = "";
for (const i in mydata) {
    document.querySelector('div').innerHTML += `<span>${mydata[i]}</span>`;
}

var index = 0;
var trueCount = 0;
var falseCount = 0;
var spaceCount = 0;

document.body.onkeypress = function (event) {
    if (index >= mydata.length) {
        return;
    }
    if (event.key === " ") {
        spaceCount++;
        document.querySelectorAll('aside')[2].innerText = spaceCount;
    }
 
    if (event.key === mydata[index]) {
        document.querySelectorAll('span')[index].style.color = "lime";
        trueCount++;
        document.querySelectorAll('aside')[0].innerText = trueCount;
    } else {
        document.querySelectorAll('span')[index].style.color = "red";
        falseCount++;
        document.querySelectorAll('aside')[1].innerText = falseCount;
    }
    index++;
};