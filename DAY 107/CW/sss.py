twoD = [ ["Stefan", "Raj"],
  ["Alexa",  "Amy"],
  ["Liz",    "Claire"],
  ["Dee",    "Luke"] ]


def solver(arr):
    a = []
    num = 0
    for i in arr:
        num = num + 1
        for u in range(len(i)):
            if num % 2 == 1:
                a.append(i[u])
            else:
                a.append(i[-(u+1)])
    return a

print(solver(twoD))


def multi_table(number):

    stri =""
    
    for i in range(1,11):
        
        
        stri += str(i) +" * "+ str(number) +" = "+ str(i*number) + "\n"
        

    return stri


print(multi_table(5))