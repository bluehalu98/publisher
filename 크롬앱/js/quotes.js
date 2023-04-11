const quotes = [
  {
    quotes : 'quotes1',
    author : 'author1',
  },
  {
    quotes : 'quotes2',
    author : 'author2',
  },
  {
    quotes : 'quotes3',
    author : 'author3',
  },
  {
    quotes : 'quotes4',
    author : 'author4',
  },
  {
    quotes : 'quotes5',
    author : 'author5',
  },
  {
    quotes : 'quotes6',
    author : 'author6',
  },
  {
    quotes : 'quotes7',
    author : 'author7',
  },
  {
    quotes : 'quotes8',
    author : 'author8',
  },
  {
    quotes : 'quotes9',
    author : 'author9',
  },
  {
    quotes : 'quotes10',
    author : 'author10',
  },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;