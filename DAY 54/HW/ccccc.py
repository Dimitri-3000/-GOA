def get_size(w,h,d):
    yo = str((h*w + d*w + h*d)*2)+ " " + str(w*h*d)
    gio = yo.split()
    zvio = []
    for i in gio:
        zvio.append(int(i))
    return zvio