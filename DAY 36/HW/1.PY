nika = {
    "age": "16",
    "height": "2m",
    "birthday": "2 oct"
}


guka = {
    "age": "15",
    "height": "1.5m",
    "birthday": "31 jan"
}

kaxa = {
    "age": "34",
    "height": "3m",
    "birthday": "1 jan"
}

nodari = {
    "age": "55",
    "height": "5m",
    "birthday": "31 dec"
}
nikalist = []
gukalist = []
kaxalist = []
nodarilist = []
mylist = []

for i in nika.values():
    nikalist.append(i)
for u in guka.values():
    gukalist.append(u)
for e in kaxa.values():
    kaxalist.append(e)
for a in nodari.values():
    nodarilist.append(a)

mylist.append(nikalist)
mylist.append(gukalist)
mylist.append(kaxalist)
mylist.append(nodarilist)

print(mylist)
