
erti = 20
ori = 5
sami = 3




def zero_fuel(distance_to_pump, mpg, fuel_left):
    if mpg*distance_to_pump > fuel_left:
        return False
    else:
        return True
    

print(zero_fuel(erti,ori,sami))
