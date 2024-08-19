// Description:
// John learns to play poker with his uncle. His uncle told him: Poker to be in accordance with the order of "2 3 4 5 6 7 8 9 10 J Q K A". The same suit should be put together. But his uncle did not tell him the order of the four suits.

// Give you John's cards and Uncle's cards(two string john and uncle). Please reference to the order of Uncle's cards, sorting John's cards.

// Examples
// For Python:

// Suits are defined as S, D, H, C.

// sort_poker("D6H2S3D5SJCQSKC7D2C5H5H10SA","S2S3S5HJHQHKC8C9C10D4D5D6D7")
// should return "S3SJSKSAH2H5H10C5C7CQD2D5D6"
// sort_poke("D6H2S3D5SJCQSKC7D2C5H5H10SA","C8C9C10D4D5D6D7S2S3S5HJHQHK") 
// should return "C5C7CQD2D5D6S3SJSKSAH2H5H10" 

function sortPoker(john,uncle){
    let suit =  ['♦','♥','♠','♣']
    let faceCards = {
      'J': 11,
      'Q': 12, 
      'K': 13, 
      'A': 14,
    }
    let suitMap = {
      '♦': [], 
      '♥': [],
      '♠': [], 
      '♣': [],
    }
    suit.forEach( el => {
      john.split(el).forEach(section=> section[0]== 1? suitMap[el].push(10) : suitMap[el].push(section[0]))
      suitMap[el].shift()
      suitMap[el] = suitMap[el].map(card=> {
        return Object.hasOwn(faceCards, card) ? faceCards[card]: card
        })
      suitMap[el].sort((a, b)=> a - b)
    })
    let suitOrder = uncle.split('').filter(el=> suit.includes(el)).filter((el, index, arr)=> el != arr[index+1] )
    let johnsOrderedCards = ''
    suitOrder.forEach( uncleSuit => suitMap[uncleSuit].forEach(card=> card > 10? johnsOrderedCards += uncleSuit + Object.keys(faceCards).find(key => faceCards[key] === card) : johnsOrderedCards += uncleSuit +card))
    return johnsOrderedCards
  }