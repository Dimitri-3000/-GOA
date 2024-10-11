function duplicateCount(text){
    const lowerText = text.toLowerCase();       //გარდავქმენიტ ყველაფერი პატარა ასოდ
    const duplicates = [];                      
    
    for(let i = 0; i < text.length; i++){       //ტექსტ სტრინგს ვუვლით for ლუპით მაგრამ ყოველ იტერაციაზე 
                                                
      let count = 0;
      
      for(let x = 0; x < text.length; x++){      //კიდევერთხელ ვუვლით მას რომ ვიპოვოთ თუ შეესაბამება პირველი იტერაციის ამჯამინდელი
                                                 //ცვლადი შიდა იტერაციისას ამოსულ სხვა ასოს
        if(lowerText[i] === lowerText[x]) {
          count++;
        }
      }
      
      if(count > 1 && !duplicates.includes(lowerText[i])){      // თუ დაემთხვა პირველი და შიდა ფორ ლუპების ცვლადები 
                                                                // და duplicates მასივი უკვე არ შეიცავს ამ ცვლადების მნიშვნელობას 
                                                                // duplicates massive ში ვამატებთ for loopis ცვლადის მნიშვნელობას
        duplicates.push(lowerText[i])
      }
    }
    
    return duplicates.length;         //ვაბრუნებთ duplicates massive ის სიგრძეს
  }


  function uniqueInOrder(sequence){       
    const result = [];
    let lastItem;
    
    for(let i = 0; i < sequence.length; i++){   // for ლუპით ვუვლით secuense სტრინგს
      if(sequence[i] != lastItem){              // lastitem ხდება sequence სტრინგის პირველი ასო
        result.push(sequence[i]);               // result ცვლადში მანამ არ დაემატება for loopis ცვალდის მნიშვნელობა 
        lastItem = sequence[i]                  // სანამ არ მორჩება რიგითი ასოები და არ დაიწყება სხვა ასოების რიგი ანუ სანამ For ლუპის ცვლადის მნიშვნელობა აღარ დაემთხვევა წინა ცვლადს
      }                                         // თუ აღარ დაემთხვევა ამჟამინდელ for loopis ცვლადს ვამატებთ Result მასივში და lastitems ვამზადებთ შემდეგი ასოების მიმდევრობისთვის
    }
    
    return result;                              // ვაბრუნებთ მასივს რომელიც შედგება მიმდევრობების მხოლოდ ერთი ასოთი
  } 