def n1(arr):
    new = [[], []]
    count = -1
    for i in arr:
        a = 0
        for u in i:
            a += u
        new[0].append(int(a/len(i)))
    
    for i in range(len(arr[0])):
        v = 0
        for u in range(len(arr)):
            v += arr[u][i]
        new[1].append(int(v/len(arr)))
        
    return new

wa = [[1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7],
      [1,2,3,4,5,6,7]]

print(n1(wa))

def n2(arr):
    for i in range(len(arr)):
        for u in range(len(arr[i])):
            if u % 2 == 0:
                arr[i][u] = arr[i][u] / 2
            else:
                arr[i][u] = arr[i][u] % 13
    return arr


wo = [[2,14,2,14,2,14,2],
      [2,14,2,14,2,14,2],
      [2,14,2,14,2,14,2],
      [2,14,2,14,2,14,2],
      [2,14,2,14,2,14,2],
      [2,14,2,14,2,14,2]]

print(n2(wo))


def n3(arr):
    arr[0][0], arr[-1][-1] = arr[-1][-1], arr[0][0]

    return arr

wi = [["a","b","c","d","e"],
      ["f","g","h","i","j"],
      ["k","l","m","n","o"],
      ["p","q","r","s","t"],
      ["u","v","w","x","y"],
      ["z","z","z","z","z"]]

print(n3(wi))


def n4(arr):
    arr[1], arr[4] = arr[4], arr[1]
    return arr

we = [[1,2,3,4,5,6,7,8],
      [0,0,0,0,0,0,0,0],
      [1,2,3,4,5,6,7,8],
      [1,2,3,4,5,6,7,8],
      [1,1,1,1,1,1,1,1],
      [1,2,3,4,5,6,7,8]]

print(n4(we))

import random



def n5(n,m):
    NM = random.sample(range(1,100), n*m)
    ar = []
    for i in range(0,m):
        ar.append([])
    for i in ar:
        for u in range(0,n):
            v = random.choice(NM)
            i.append(v)
            NM.pop(NM.index(v))
    big = max(ar[0])
    for i in ar:
        if max(i) > big:
            big = max(i)
    
    
    
    return ar, "the biggest value is: " + str(big)



print(n5(3,4))












