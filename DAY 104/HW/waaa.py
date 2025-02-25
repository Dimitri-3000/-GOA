#1

mylist = "12345"

def sum_digits(n):
    result = 0
    i = 0
    
    while i < len(n):
        v = True
        if v == True:
            result = result + int(n[i])
            i = i + 1
            v = False
        
    
    return result


print(sum_digits(mylist))


#2

mylist2 = [1,2,3,9,8]

def sum_two_largest(lst):
    if len(lst) < 2:
        return "short list"

    max1 = max(lst)
    maxindex = lst.index(max1)



    lst.pop(maxindex)
    max2 = max(lst)

    return max1 + max2

print(sum_two_largest(mylist2))