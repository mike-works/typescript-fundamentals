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
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

export enum CardNumber {
  Ace, Two, Three, Four, Five, Six,
  Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

type Card = [Suit, CardNumber];

export class Dealer {
  cards: Card[];
  constructor() {
    this.cards = this.generateDeck();
    shuffleArray(this.cards);
  }
  generateDeck(): Card[] {
    let deck: Card[] = [];
    for (let s = 0; s < Object.keys(Suit).length/2; s++) {
      for (let n = 0; n < Object.keys(CardNumber).length/2; n++) {
        deck.push([s, n]);
      }
    }
    return deck;
  }
  getLength() {
    return this.cards.length;
  }
  dealHand(numCards: number): Card[] {
    if (numCards < 0) throw new Error('Hand me YOUR cards');
    if (numCards > this.cards.length) throw new Error('I do not have enough');
    return this.cards.splice(0, numCards);
  }
  readCard(c: Card): string {
    return `${CardNumber[c[1]]} of ${Suit[c[0]]}`;
  }
}
