import { create } from "react-test-renderer";

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

type Card = [Suit, CardNumber];

const randomize = (len: number): number => {
  return Math.floor(Math.random() * Math.floor(len));
}

const filteredKeys = (obj: object): string[] => {
  return Object.keys(obj).filter((k) => {
    return isNaN(parseInt(k ,10));
  });
}

const createDeck = (): Card[] => {
  const cards: Card[] = [];
  for (let s = 0; s < filteredKeys(Suit).length; s++) {
    for (let cn = 0; cn < filteredKeys(CardNumber).length; cn++) {
      const card: Card = [s, cn];
      cards.push(card);
    }
  }
  return cards;
}
export class Dealer {
  cards: Card[];

  constructor() {
    this.cards = createDeck();
  }

  readCard = (card: Card): string => {
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
  }

  getLength = (): number => {
    return this.cards.length;
  }

  resetCards = (): void => {
    this.cards = createDeck();
  }

  numberIsValid = (count: number): boolean => {
   if (count < 1 || count > 52) {
     return false;
   }
   return true;
  }

  shuffleCards = (cards: Card[]): void => {
    // Iterate over the array
    for (let i = cards.length; i; i--) {
      // Get next index
      let j = Math.floor(Math.random() * i);
      // Swap positions
      [cards[i - 1], cards[j]] = [cards[j], cards[i - 1]];
    }
  }

  dealHand = (cardCount: number): Card[] => {
    if (!this.numberIsValid(cardCount)) {
      throw new Error('Bad number of cards. It must be between 1 and 9 or 52.');
    }
    const ret: Card[] = [];
    this.shuffleCards(this.cards);
    for (let i = 0; i < cardCount; i++) {
      const card = this.cards[i];
      ret.push(card);
    }
    return ret;
  }
}
