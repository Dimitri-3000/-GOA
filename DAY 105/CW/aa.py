#2

def points(games):
    sum = 0
    for i in games:
        if i[0] > i [2]:
            sum = sum + 3
        if i[0] < i [2]:
            sum = sum + 0
        if i[0] == i [2]:
            sum = sum + 1
    return sum