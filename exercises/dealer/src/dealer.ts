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
  Clubs, Diamonds, Heart, Spades
}
export enum CardNumber {
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

type Card = [Suit, CardNumber];

function createDeck(): Card[] {
  let cards: Card[] = [];
  for (let s = 0; s < Object.keys(Suit).length; s+=2) {
    for (let n = 0; n < Object.keys(CardNumber).length; n+=2) {
      cards.push([s/2, n/2]);
    }
  }
  return cards;
}

export class Dealer {
  cards: Card[] = [];
  constructor() {
    this.cards = createDeck();
    shuffleArray(this.cards);
  }

  // deal 5 cards
  dealHand(numCards: number): Card[] {
    if (numCards > this.getLength()) {
      throw new Error('Not enough cards left!');
    }
    if (numCards < 0) {
      throw new Error('Please return your cards.');
    }
    return this.cards.splice(this.getLength() - numCards, numCards);
  }
  // bumber of cards left in the deck
  getLength(): number {
    return this.cards.length;
  }

  readCard(card: Card): string {
    let [suit, cardNumber] = card;
    return `${CardNumber[cardNumber]} of ${Suit[suit]}`;
  }
}
