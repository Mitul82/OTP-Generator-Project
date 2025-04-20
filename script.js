function generateOTP() {
    var otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otp").innerHTML = "Your OTP is: " + otp;
}

function copyOTP() {
    var otpText = document.getElementById("otp").innerHTML;
    navigator.clipboard.writeText(otpText).then(function() {
        alert("OTP copied to clipboard: " + otpText);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}