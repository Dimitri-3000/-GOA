def is_flush(cards):
    l = cards[0][1]
    for i in cards:
        if i[1] != l:
            return False
    return True
    
cardss = ["AS", "3S", "9S", "KS", "4H"]


print(is_flush(cardss))