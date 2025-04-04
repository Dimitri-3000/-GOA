def shiifter(strr):
    sufta = [" "]*100
    
    for i in range(len(strr)):
        char = strr[i]
        lordi = ord(char) - 65
        adgili = i + lordi
        sufta[adgili] = char

    



    return ''.join(sufta).rstrip()
    


print(shiifter("ABCDE"))
