
def ggg(arr):
    lii = ""
    for i in arr:
        count = 0
        for u in arr:
            if i == u:
                count += 1
        lii += str(count)      

    return lii

print(ggg([1,2,3]))  



def klebadobit(a, mass):
    
   
    b =0
    for u in range(b, a):

        for i in range(len(mass)):
            if mass[i] == mass[-1]:
                continue
            if mass[i] > mass[i+1]:
                mass[i+1], mass[i] = mass[i], mass[i+1]
    return mass

print(klebadobit(5, [1,3,2,6,0]))
    
