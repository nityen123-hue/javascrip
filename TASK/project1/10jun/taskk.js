        var num1 = Number(prompt("Enter the Value of Num1"));
        var num2 = Number(prompt("Enter the Value of Num2"));
        var num3 = Number(prompt("Enter the Value of Num3"));

        document.querySelectorAll('p')[0].innerHTML = "Value of Num1 : " + num1;
        document.querySelectorAll('p')[1].innerHTML = "Value of Num2 : " + num2;
        document.querySelectorAll('p')[2].innerHTML = "Value of Num3 : " + num3;

        if (num1 > num2 && num1 > num3) {
            document.querySelector('h1').innerHTML = "Num1 is Greater";
        }
        else if (num2 > num1 && num2 > num3) {
            document.querySelector('h1').innerHTML = "Num2 is Greater";
        }
        else if (num3 > num1 && num3 > num2) {
            document.querySelector('h1').innerHTML = "Num3 is Greater";
        }
        else {
            document.querySelector('h1').innerHTML = "Some Values Are Equal";
        }