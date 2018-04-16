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

export enum CardNumber { Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King };
export enum Suit { Clubs, Diamonds, Hearts, Spades};
export type Card = [Suit, CardNumber];


function generateDeck(): Card[] {
  let cards: Card[] = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      cards.push([i, j]);
    }
  }
  return cards;
}

function generateCasinoDeck(): Card[] {
  let cards: Card[] = [];
  for (let k = 0; k < 6; k++) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 13; j++) {
        cards.push([i, j]);
      }
    }
  }
  return cards;
}

export class Dealer {
  private deck: Card[];
  constructor(cardGenFunction: () => Card[]) {
    this.deck = (cardGenFunction || generateDeck)();
  }
  dealHand(cards: number): Card[] {
    if (cards < 0) throw new Error('Hand me YOUR cards');
    if (cards > this.deck.length) throw new Error('Not enough left');
    let hand = this.deck.splice(this.deck.length - cards, cards);
    return hand;
  }
  getLength(): number {
    return this.deck.length;
  }
  
  readCard(card: Card): string {
    let [ suit, num ] = card;
    let suitName = Suit[suit];
    let numberName = CardNumber[num];
    return `${numberName} of ${suitName}`;
  }
}



let casinoDealer = new Dealer(generateCasinoDeck);
console.log('cards', casinoDealer.getLength());