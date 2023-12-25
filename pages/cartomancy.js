import { useState, useEffect } from 'react';

const card_meanings = [
  {
    suit: 'clubs',
    meanings: [
      {
        value: 'ace',
        meaning: 'You will receive wealth or good news',
      },
      {
        value: 'two',
        meaning: 'You may face gossip - ignore it',
      },
      {
        value: 'three',
        meaning: 'A weatlhy partner and successful marriage',
      },
      {
        value: 'four',
        meaning: 'Beware false friends',
      },
      {
        value: 'five',
        meaning: 'You will receive new friends and support',
      },
      {
        value: 'six',
        meaning: 'Success and prosperity are in the cards',
      },
      {
        value: 'seven',
        meaning:
          'Success in business may come at the cost of a romantic relationship',
      },
      {
        value: 'eight',
        meaning:
          'Difficulty in business or love may be overcome with hard work',
      },
      {
        value: 'nine',
        meaning: 'You will receive a new admirer or opportunities',
      },
      {
        value: 'ten',
        meaning: 'Unexpected fortune or travel are in your future',
      },
      {
        value: 'jack',
        meaning: 'Represents a reliable and trusted dark-haired friend',
      },
      {
        value: 'queen',
        meaning: 'A dark-haired, helpful, and confident woman',
      },
      {
        value: 'king',
        meaning: 'A dark-haired, strong older man',
      },
    ],
  },
  {
    suit: 'diamonds',
    meanings: [
      {
        value: 'ace',
        meaning: 'Look for a gift of jewelry, money, a letter or other message',
      },
      {
        value: 'two',
        meaning: 'Someone may disapprove of a relationship',
      },
      {
        value: 'three',
        meaning:
          'Remain lawful and honest in your actions for the happiest outcome',
      },
      {
        value: 'four',
        meaning:
          'An unexpected windfall or change in fortune is coming your way',
      },
      {
        value: 'five',
        meaning:
          'You will enjoy improvements in your financial situation and love life',
      },
      {
        value: 'six',
        meaning:
          'Stay present through communication challenges in your romantic life',
      },
      {
        value: 'seven',
        meaning: 'A challenging work situation will be resolved in your favor',
      },
      {
        value: 'eight',
        meaning: 'Look for surprise romance or travel',
      },
      {
        value: 'nine',
        meaning: 'New business opportunities are coming',
      },
      {
        value: 'ten',
        meaning: 'Financial prosperity and good fortune',
      },
      {
        value: 'jack',
        meaning: 'Beware an unreliable young person with light hair',
      },
      {
        value: 'queen',
        meaning: 'Represents an outgoing woman with light hair',
      },
      {
        value: 'king',
        meaning: 'Represents an accomplished older man with influence',
      },
    ],
  },
  {
    suit: 'hearts',
    meanings: [
      {
        value: 'ace',
        meaning: 'New relationships, friendships, or romance',
      },
      {
        value: 'two',
        meaning: 'Good fortune in love and relationships',
      },
      {
        value: 'three',
        meaning: 'Be cautious in your relationships',
      },
      {
        value: 'four',
        meaning: 'Change or travel is on the horizon',
      },
      {
        value: 'five',
        meaning: 'Someone in your life is jealous',
      },
      {
        value: 'six',
        meaning: 'Surprise new love interest',
      },
      {
        value: 'seven',
        meaning: 'Broken promises',
      },
      {
        value: 'eight',
        meaning: 'Visitors and invitations',
      },
      {
        value: 'nine',
        meaning: 'Your wish will come true',
      },
      {
        value: 'ten',
        meaning: 'Good fortune is coming',
      },
      {
        value: 'jack',
        meaning: 'Represents a good friend or a young, possibly blond person',
      },
      {
        value: 'queen',
        meaning: 'You will receive help from a kind woman',
      },
      {
        value: 'king',
        meaning: 'Seek out the advice of a kind, helpful man',
      },
    ],
  },
  {
    suit: 'spades',
    meanings: [
      {
        value: 'ace',
        meaning: 'Something is coming to an end',
      },
      {
        value: 'two',
        meaning: 'You will make a hard decision, leading to change',
      },
      {
        value: 'three',
        meaning: 'Take care of the relationships you value',
      },
      {
        value: 'four',
        meaning: 'Take extra care with your health',
      },
      {
        value: 'five',
        meaning: 'Through difficulty you will find success',
      },
      {
        value: 'six',
        meaning:
          'Improvement will come through small wins. You are on the upswing',
      },
      {
        value: 'seven',
        meaning: 'Beware bad advice',
      },
      {
        value: 'eight',
        meaning: 'Caution is advised',
      },
      {
        value: 'nine',
        meaning: 'Bad luck does not last forever',
      },
      {
        value: 'ten',
        meaning: 'You have freedom - exercise it',
      },
      {
        value: 'jack',
        meaning: 'This represents a young person with dark hair',
      },
      {
        value: 'queen',
        meaning: 'This represents a woman with black hair',
      },
      {
        value: 'king',
        meaning: 'A man with black hair',
      },
    ],
  },
];

export default function Cartomancy() {
  const [selectedSuit, setSelectedSuit] = useState('clubs');
  const [selectedCardValue, setSelectedCardValue] = useState('ace');
  const [fortune, setFortune] = useState('');

  useEffect(() => {
    console.log('selectedSuit: ' + selectedSuit);
    console.log('selectedCardValue: ' + selectedCardValue);
    setFortune(getCardMeaning());
  }, [selectedSuit, selectedCardValue]);

  function getCardMeaning() {
    let suit_cards = card_meanings.find(
      (card_meanings) => card_meanings.suit === selectedSuit
    );
    let card = suit_cards.meanings.find(
      (suit_card) => suit_card.value === selectedCardValue
    );
    return card.meaning;
  }

  return (
    <>
      <div
        style={{
          textAlign: 'right',
          paddingRight: '16px',
          marginTop: '16px',
          marginBottom: '16px',
          fontSize: '18px',
          fontFamily: 'Lato, sans-serif',
        }}
      >
        <a href='/share'>Upload a photo</a>
      </div>
      <div className='card-container'>
        <div className='card'>
          <h2>Yes or No Question</h2>
          <p>
            First, make sure you have at least one Joker in your deck of cards.
          </p>
          <p>Shuffle the cards while pondering a yes or no question.</p>
          <p>
            Begin to deal the cards in front of you while counting. If the Joker
            appears on an even number, the answer to your query is Yes. If it
            appears on an odd number, the answer is No.
          </p>
        </div>
        <div className='card'>
          <h2>A more general question</h2>
          <p>First, remove the face cards from the deck.</p>
          <p>Shuffle the cards while pondering your question.</p>
          <p>
            Deal one card in front of you, and look up its associated fortune.
          </p>
          <p>
            Or, deal three cards and look up their associated fortunes. The
            leftmost card represents the past, the center card the present, and
            the right card the future.
          </p>
        </div>
      </div>
      <div className='card-finder'>
        <h2>Find a card</h2>
        <select
          name='suit'
          id='suit-select'
          defaultValue={'clubs'}
          onChange={(e) => setSelectedSuit(e.target.value)}
          className='card-finder-select'
        >
          <option value='clubs'>Clubs</option>
          <option value='spades'>Spades</option>
          <option value='hearts'>Hearts</option>
          <option value='diamonds'>Diamonds</option>
        </select>
        <select
          name='value'
          id='value-select'
          defaultValue={'ace'}
          onChange={(e) => setSelectedCardValue(e.target.value)}
          className='card-finder-select'
        >
          <option value='ace'>Ace</option>
          <option value='two'>Two</option>
          <option value='three'>Three</option>
          <option value='four'>Four</option>
          <option value='five'>Five</option>
          <option value='six'>Six</option>
          <option value='seven'>Seven</option>
          <option value='eight'>Eight</option>
          <option value='nine'>Nine</option>
          <option value='ten'>Ten</option>
          <option value='jack'>Jack</option>
          <option value='queen'>Queen</option>
          <option value='king'>King</option>
        </select>
        <p>{fortune}</p>
      </div>
    </>
  );
}
