function kvadrMath() {
    let a = document.getElementById("kA").value;
    let b = document.getElementById("kB").value;
    let c = document.getElementById("C").value;

    if(a == 0) {
        document.getElementById("ans").innerHTML = "that is a linear equasion you moron"
    }
    else {
        let D = b**2 - 4*a*c
        let x1 = (-b + D**0.5)/(2*a)
        let x2 = (-b - D**0.5)/(2*a)
        if(D < 0) {
            document.getElementById("ans").innerHTML = "the equation has no solution"
        }
        else {
            document.getElementById("ans").innerHTML = "the answers are: " + "x1 = " + x1 + ", " + "x2 = " + x2;
        }
    }
    document.getElementById("box").style.zIndex = 2;
    document.getElementById("box").style.opacity = "100%";
    document.getElementById("box").style.borderColor = "rgb(255, 150, 150)";
}