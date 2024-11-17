import random

seti = ["giorgi", "tornike", "mate", "nika", "cotne", "dato", "nikolozi","ani","elene","d",'g',"k","o"]

diva = len(seti) // 3


num = []
jgufebi = []
for i in range(len(seti)):
    num.append(i)


for u in range(diva):
    u = []
    jgufebi.append(u)

a =0
for o in jgufebi:
    while a < 3:
        o.append(seti[random.choice(num)])
        a = a + 1
        
        

print(jgufebi)


#warumatebloba
    

    


        
