
erti = "abbadio"
ori = "bbaoid"

def is_anagram(test, original):
    for i in test:
        if test.count(i) != original.count(i):
            return False
        
    return True

print(is_anagram(erti,ori))


