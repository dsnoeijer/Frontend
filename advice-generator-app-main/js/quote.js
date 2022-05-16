// https://api.adviceslip.com/advice

const quoteContainer = document.querySelector('.quote');
const quoteTitle = document.querySelector('.title');

const getQuote = async () => {
    quote = await fetch('https://api.adviceslip.com/advice');
    const gq = (quote.json())
        .then(res => {
            quoteTitle.innerHTML = `ADVICE #${res.slip.id}`;
            quoteContainer.innerHTML = `&ldquo;${res.slip.advice}&rdquo;`;
        });
}
