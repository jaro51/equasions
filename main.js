function calc() {
  let a = document.getElementById("kA").value;
  let b = document.getElementById("kB").value;
  let c = document.getElementById("C").value;
  let ans = document.getElementById("ans");
  let menu = document.getElementById("menu");

  if(a == 0) {
    if(b == 0) {
      if(c == 0) {
        ans.innerText = "you have not entered the equasion";
      }
      else {
        ans.innerHTML = "the equation has no solution";
      }
    }
    else {
      let x = (-c)/b
      ans.innerHTML = "the answer is: " + "x = " + x;
    }
  }
  else {
    D = b**2 - 4*a*c
    x1 = (-b + D**0.5)/(2*a)
    x2 = (-b - D**0.5)/(2*a)
    if (D < 0) {
      x = -b / (2 * a)
      m = ""
      if (x < 0) {
        x = x * -1
        m = "- "
      }
      xi = Math.round(((-1 * D) ** 0.5 * 1000) / (2 * a)) / 1000 + "i"
      ans.innerHTML = "the answers are: " + "x1 = " + m + x + " + " + xi + ", " + "x2 = " + m + x + " - " + xi;
    }
    else {
      ans.innerHTML = "the answers are: " + "x1 = " + x1 + ", " + "x2 = " + x2;
    }
  }
  ans.style.pointerEvents = "all";
  ans.style.opacity = 1;
}
