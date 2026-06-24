// Recursion Function 
// 1. Write a recursive function to generate Armstrong Number series up to n terms.
function armstrongSeries(n) {
    for (let i = 0; i < n; i++) {
        if (isArmstrong(i)) {
            console.log(i);
        }
    }   
}

function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    let digits = num.toString().length; 
    while (temp > 0) {
        let rem = temp % 10;
        sum += rem ** digits;
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}

armstrongSeries(1000);


//2
const calculateTax = (income) => {
    let tax = 0;

    if (income <= 200000) {
        tax = 0;
    } else if (income <= 300000) {
        tax = (income - 200000) * 0.05;
    } else if (income <= 750000) {
        tax = 15000 + (income - 300000) * 0.20;
    } else {
        tax = 112500 + (income - 750000) * 0.30;
    }

    return tax;
};
console.log("Tax =", calculateTax(250000));

//3
const calculateBill = function(price, quantity) {
    let subtotal = price * quantity;
    let gst = subtotal * 0.18;
    let total = subtotal + gst;

    console.log("Subtotal:", subtotal);
    console.log("GST:", gst);
    console.log("Total Bill:", total);
};


calculateBill(50, 22);

//4. Write a function to validate a 6-digit OTP.
function validateOTP(otp) {
    const otpPattern = /^\d{6}$/;
    return otpPattern.test(otp);
}
console.log(validateOTP("123456"));
console.log(validateOTP("12345"));