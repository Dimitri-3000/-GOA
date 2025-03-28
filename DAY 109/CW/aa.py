def maskify(cc):
    
    if len(cc) <= 4:
        return cc
    last = ""
    last = last + cc[-4] + cc[-3] + cc[-2] + cc[-1]
    
    return "#"*(len(cc)-4) + last

