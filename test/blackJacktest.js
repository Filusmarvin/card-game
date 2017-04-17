// A game (for our purposes) has one player and a dealer
// At the start of the game, the player gets two cards and so does the dealer
// The player can ask for another card
// The player can repeat that request as many times as desired
// Once the player doesn't want any more cards, the dealer will ask for more cards until the dealer's hand is worth at least 17


let assert = require('assert');
let Deck = require('../lib/Deck.js')
let BlackJack = require('../lib/blackJack.js')

 describe ('Black Jack', function (){
   let blackJack;
   beforeEach(function (){
     blackJack = new BlackJack("Marvin","Brian");
   })
   describe('#Start game', function () {
     it('gives the player and dealer 1 cards', function() {
       blackJack.start();
       assert.equal("Marvin", blackJack.player);
       assert.equal("Brian", blackJack.dealer);
     });
   });
   describe('#Another card' , function () {
    it( 'player asked for another card', function () {
      blackJack.start();
      blackJack.hit()
    });
  });
  describe('#Dealer hit', function (){
    it('dealer will get cards until the value of the cards is 17', function () {
      blackJack.dealersTurn();
    })
  })
 })
