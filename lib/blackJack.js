// A game (for our purposes) has one player and a dealer
// At the start of the game, the player gets two cards and so does the dealer
// The player can ask for another card
// The player can repeat that request as many times as desired
// Once the player doesn't want any more cards, the dealer will ask for more cards until the dealer's hand is worth at least 17

let Deck = require('./Deck.js')

function BlackJack (player,dealer){
this.player = player;
this.dealer = dealer;
this.deck = new Deck;
this.participant = [];
this.opponent = [];
}

BlackJack.prototype.start = function (){
  for( i=0; i<2; i++){
    this.participant.push(this.deck.deal())
    this.opponent.push(this.deck.deal())
    console.log('hello')
  }
}

BlackJack.prototype.hit = function () {
  this.participant.push(this.deck.deal())
}

BlackJack.prototype.dealersTurn = function(){
  for( i=1; i<this.opponent.value; i++){
    this.opponent.push(this.deck.deal())
    console.log(this.opponent[i].value);
    console.log(this.opponent);
  }
}
module.exports = BlackJack
