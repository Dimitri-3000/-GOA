
list = [1,3,4,5,'4',5,'8']



def sum_mix(arr):
    tvla = 0
    for i in arr:
        tvla = tvla + int(i)

    return tvla

print(sum_mix(list))