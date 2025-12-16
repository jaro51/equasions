function lineaMath() {
    let a = document.getElementById("lA").value;
    let b = document.getElementById("lB").value;

    if(a == 0) {
        if(b == 0) {
            document.getElementById("ans").innerText = "the equation has infinitely many solutions";
        }
        else {
            document.getElementById("ans").innerHTML = "the equation has no solution";
        }
    }
    else {
        console.log(a)
        console.log(b)
        let x = (-b)/a
        console.log(x)
        document.getElementById("ans").innerHTML = "the answer is: " + "x = " + x;
    }
    document.getElementById("box").style.zIndex = 2;
    document.getElementById("box").style.opacity = "100%";
    document.getElementById("box").style.borderColor = "rgb(150, 150, 255)";
}