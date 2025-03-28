#1
def number(lines):
    new = []
    num = 0
    for i in lines:
        num += 1
        new.append((str(num)) + ": " + i)
        
    return new
        

# 2
def bonus_time(salary, bonus):
    if bonus:
        return "$" + str(salary*10)
    else:
        return "$" + str(salary)
    

#3
def min_max(lst):
    maxx = max(lst)
    minn = min(lst)
    
    return [minn, maxx]
    
#4
def sum_mix(arr):
    new =[]
    for i in arr:
        new.append(int(i))
        
    sum = 0
        
    for i in new:
        sum = sum + i
    
    return sum