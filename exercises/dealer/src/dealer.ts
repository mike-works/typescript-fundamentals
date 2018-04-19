/**
 * Shuffle an array in place
 * @param cards Array to shuffle
 */

 enum Suit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
 }

 enum CardNumber {
   Ace,
   One,
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
 }

 type Card = [Suit, CardNumber];

 const sample: Card[] = [
   [Suit.Spades, CardNumber.Ace],
 ];

function shuffleArray(cards: any[]) {
  // Iterate over the array
  for (let i = cards.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [cards[i - 1], cards[j]] = [cards[j], cards[i - 1]];
  }
}

export class Dealer {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards || [];
  }
}
