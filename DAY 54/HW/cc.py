

def max_diff(lst):
    if len(lst)<= 1:
        return 0
    max = lst[1]
    min = lst[1]
    for i in lst:
        if i > max:
            max = i
    for u in lst:
        if u <= min:
            min = u
    return max - min
        