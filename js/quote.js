
// let quotes = [{
//     quote: `“Be yourself; everyone else is already taken.” <br>
//     ― Oscar Wilde`,
// },
// {
//     quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me” <br>
//     ― Marilyn Monroe`,
// },
// {
//     quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>
//     ― Bernard M. Baruch`,
// },
// {
//     quote: `“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” <br>
//     ― William W. Purkey`,
// },
// {
//     quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” <br>
//     ― Dr. Seuss`,
// },

// ]


// function click() {
//     let randomQuote = Math.floor(Math.random() * (quotes.length))
//     document.getElementById("quoteAuthor").innerHTML = quotes[randomQuote].quote
// }

let quotes = [{
    quote: `“Be yourself; everyone else is already taken.” <br>
    ― Oscar Wilde`,
},

{
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>
    ― Bernard M. Baruch`,
},

{
    quote: `“Be the change that you wish to see in the world.” <br>
    ― Mahatma Gandhi`,
},
{
    quote: `“In three words I can sum up everything I've learned about life: it goes on.” <br>
    ― Robert Frost`,
},
{
    quote: `“It is better to be hated for what you are than to be loved for what you are not.” <br>
    ― Andre Gide`,
},

{
    quote: `“You only live once, but if you do it right, once is enough.” <br>
    ― Mae West`,
},

{
    quote: `“A room without books is like a body without a soul.”<br>
    ― Marcus Tullius Cicero`,
},
]
var btn = document.getElementById('btnClick')
btn.addEventListener('click', function () {
    var randomQuote = Math.floor(Math.random() * (quotes.length))
    console.log(randomQuote);
    console.log(quotes);
    document.getElementById("quoteAuthor").innerHTML = quotes[randomQuote].quote
})