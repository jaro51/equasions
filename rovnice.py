from cmath import inf
import os
import time

def inputs():
    global a
    global b
    global c
    print("a:")
    a = float(input())
    print("b:")
    b = float(input())
    if rov_check == 2:
        print("c:")
        c = float(input())

print("zvol, zda je rovnice lineární (1) nebo kvadratická (2)")
rov_check = int(input())
if rov_check == 1:
    print("z rovnice v základním tvaru (ax + b = 0)")
    print("napiš postupně členy a, b")
    inputs()
    if a == 0:
        if b == 0:
            os.system('cls')
            print("rovnice má nekonečně mnoho řešení")
            time.sleep(10)
        else:
            os.system('cls')
            print("rovnice nemá řešení")
            time.sleep(10)
    elif b == 0:
        os.system('cls')
        print("výsledek je: x = 0")
        time.sleep(10)
    else:
        x = b/a
        os.system('cls')
        print("výsledek je: " + "x = " + str(x))
        time.sleep(10)


elif rov_check == 2:
    print("z rovnice v základním tvaru (ax**2 + bx + c = 0)")
    print("napiš postupně členy a, b, c")
    inputs()
    if a == 0:
        os.system('cls')
        print("to je lineární ty kreténe")
        time.sleep(10)
    else:
        D = b**2 - 4*a*c
        if D < 0:
            os.system('cls')
            print("rovnice nemá řešení")
            time.sleep(10)
        else:
            x1 = (-b + D**0.5)/(2*a)
            x2 = (-b - D**0.5)/(2*a)
            if x1 == x2:
                os.system('cls')
                print("výsledek je: " + "x = " + str(x1))
                time.sleep(10)
            else:
                os.system('cls')
                print("výsledek je: " + "x1 = " + str(x1) + " a " + "x2 = " + str(x2))
                time.sleep(10)
        

else:
    os.system('cls')
    print("špatná odpověď")
    os.system('cls')
    time.sleep(10)

