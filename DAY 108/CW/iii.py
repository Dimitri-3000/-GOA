

def surfacearea_volume(w,h,d):
    area = (w*h)*2 + (h*d)*2 + (d*w)*2
    volume = w*h*d



    return [area, volume]

print(surfacearea_volume(2,3,4))