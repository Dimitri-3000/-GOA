def stray(arr):
    ux = arr[0]
    ix = arr[1]
    if ux == ix:
        for i in arr:
            if i != ux:
                return i
    else:
        if arr[2] == ux:
            return ix
        else:
            return ux