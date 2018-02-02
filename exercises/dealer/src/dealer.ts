/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Club,
  Diamond,
  Heart,
  Spade
}

export enum CardNumber {
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

type Card = [Suit, CardNumber];

function newDeck(): Card[] {
  let cards: Card[] = [];
  for (let s = 0; s < 4; s++) {
    for (let n = 0; n < 13; n++) {
      cards.push([s, n]);
    } 
  }
  return cards;
}

export class Dealer {
  cards: Card[] = newDeck()
  getLength(): number {
    return this.cards.length;
  }
  readCard(c: Card): string {
    let [s, num] = c;
    return `${CardNumber[num]} of ${Suit[s]}s`;
  }
  dealHand(numCards: number): Card[] {
    if (numCards < 0) throw new Error('you give ME some cards');
    if (numCards > this.cards.length) throw new Error("I'm out!");
    return this.cards.splice(this.cards.length - numCards, numCards);
  }
}
