def digitize(n):
    nu = " "
    for i in str(n):
        nu = nu + i + " "
    nunu = nu.split()
    nana = []
    for i in nunu:
        nana.append(int(i))
    return nana
