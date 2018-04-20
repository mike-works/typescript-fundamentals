/**
 * Shuffle an array in place
 * @param cards Array to shuffle
 */

 export enum Suit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
 }

 export enum CardNumber {
   Ace,
   Two,
   Three,
   Four,
   Five,
   Six,
   Seven,
   Eight,
   Nine,
   Jack,
   Queen,
   King,
   Joker,
 }

 export type Card = [Suit, CardNumber];

const cards: Card[] = [
  [Suit.Clubs, CardNumber.Ace],
  [Suit.Clubs, CardNumber.Two],
  [Suit.Clubs, CardNumber.Three],
  [Suit.Clubs, CardNumber.Four],
  [Suit.Clubs, CardNumber.Five],
  [Suit.Clubs, CardNumber.Six],
  [Suit.Clubs, CardNumber.Seven],
  [Suit.Clubs, CardNumber.Eight],
  [Suit.Clubs, CardNumber.Nine],
  [Suit.Clubs, CardNumber.Jack],
  [Suit.Clubs, CardNumber.Queen],
  [Suit.Clubs, CardNumber.King],
  [Suit.Clubs, CardNumber.Joker],
  [Suit.Diamonds, CardNumber.Ace],
  [Suit.Diamonds, CardNumber.Two],
  [Suit.Diamonds, CardNumber.Three],
  [Suit.Diamonds, CardNumber.Four],
  [Suit.Diamonds, CardNumber.Five],
  [Suit.Diamonds, CardNumber.Six],
  [Suit.Diamonds, CardNumber.Seven],
  [Suit.Diamonds, CardNumber.Eight],
  [Suit.Diamonds, CardNumber.Nine],
  [Suit.Diamonds, CardNumber.Jack],
  [Suit.Diamonds, CardNumber.Queen],
  [Suit.Diamonds, CardNumber.King],
  [Suit.Diamonds, CardNumber.Joker],
  [Suit.Hearts, CardNumber.Ace],
  [Suit.Hearts, CardNumber.Two],
  [Suit.Hearts, CardNumber.Three],
  [Suit.Hearts, CardNumber.Four],
  [Suit.Hearts, CardNumber.Five],
  [Suit.Hearts, CardNumber.Six],
  [Suit.Hearts, CardNumber.Seven],
  [Suit.Hearts, CardNumber.Eight],
  [Suit.Hearts, CardNumber.Nine],
  [Suit.Hearts, CardNumber.Jack],
  [Suit.Hearts, CardNumber.Queen],
  [Suit.Hearts, CardNumber.King],
  [Suit.Hearts, CardNumber.Joker],
  [Suit.Spades, CardNumber.Ace],
  [Suit.Spades, CardNumber.Two],
  [Suit.Spades, CardNumber.Three],
  [Suit.Spades, CardNumber.Four],
  [Suit.Spades, CardNumber.Five],
  [Suit.Spades, CardNumber.Six],
  [Suit.Spades, CardNumber.Seven],
  [Suit.Spades, CardNumber.Eight],
  [Suit.Spades, CardNumber.Nine],
  [Suit.Spades, CardNumber.Jack],
  [Suit.Spades, CardNumber.Queen],
  [Suit.Spades, CardNumber.King],
  [Suit.Spades, CardNumber.Joker],
];

const shuffleArray = (cards: Card[]) => {
  // Iterate over the array
  for (let i = cards.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [cards[i - 1], cards[j]] = [cards[j], cards[i - 1]];
  }
}

const randomize = (len: number): number => {
  return Math.floor(Math.random() * Math.floor(len));
}
export class Dealer {
  cards: Card[];

  constructor() {
    this.cards = cards;
  }

  readCard = (card: Card): string => {
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
  }

  getLength = (): number => {
    return this.cards.length;
  }

  resetCards = (): void => {
    this.cards = cards;
  }

  numberIsValid = (count: number): boolean => {
   if (count < 1 || count > 52) {
     return false;
   }
   return true;
  }

  dealHand = (cardCount: number): Card[] => {
    if (!this.numberIsValid(cardCount)) {
      throw new Error('Bad number of cards. It must be between 1 and 9 or 52.');
    }
    const ret: Card[] = [];
    shuffleArray(this.cards);
    for (let i = 0; i < cardCount; i++) {
      const card = this.cards[i];
      ret.push(card);
    }
    return ret;
  }
}
