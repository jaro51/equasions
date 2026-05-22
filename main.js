function Math() {
    let a = document.getElementById("kA").value;
    let b = document.getElementById("kB").value;
    let c = document.getElementById("C").value;

    if(a == 0) {
      if(b == 0) {
          if(c == 0) {
              document.getElementById("ans").innerText = "the equation has infinit number of solutions";
          }
          else {
              document.getElementById("ans").innerHTML = "the equation has no solution";
          }
      }
      else {
          let x = (-c)/b
          console.log(x)
          document.getElementById("ans").innerHTML = "the answer is: " + "x = " + x;
      }
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
    box.style.zIndex = 2;
    box.style.opacity = "100%";
    box.style.borderColor = "rgb(255, 150, 150)";
}
function lineaMath() {

    if(b == 0) {
        if(c == 0) {
            document.getElementById("ans").innerText = "the equation has infinit number of solutions";
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
    box.style.zIndex = 2;
    box.style.opacity = "100%";
    box.style.borderColor = "rgb(150, 150, 255)";
}
