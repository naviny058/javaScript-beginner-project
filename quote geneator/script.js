let quoteList = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss",
    image: "https://bit.ly/2Gf5Bwn"
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
    image: "https://bit.ly/2IU7GQ3"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    image: "https://bit.ly/2DWZDOH"
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    image: "https://bit.ly/2I75vHs"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
    image: "https://bit.ly/2GgTTBy"
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
    image: "https://bit.ly/2I6BaZO"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
    image: "https://bit.ly/2pIBAhn"
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
    image: "https://bit.ly/2pGwBOV"
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    image: "https://bit.ly/2Gf5Bwn"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    image: "https://bit.ly/2Gt5JLX"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    image: "https://bit.ly/2ulqynI"
  }
];

let btn = document.querySelector('#new-quote')
let quote =document.querySelector('.quotes')
let person =document.querySelector('.person')

btn.addEventListener('click',function(){
    let rn = Math.floor(Math.random() *quoteList.length)
    quote.textContent = quoteList[rn].quote
    person.textContent = quoteList[rn].author
})