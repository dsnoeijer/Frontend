// https://api.adviceslip.com/advice

const quoteContainer = document.querySelector('.quote');
const quoteTitle = document.querySelector('.title');

const getQuote = async () => {
    quote = await fetch('https://api.adviceslip.com/advice');
    const gq = (quote.json())
        .then(res => {
            quoteTitle.innerHTML = `<h1>ADVICE #${res.slip.id}</h1>`;
            quoteContainer.innerHTML = `&ldquo;${res.slip.advice}&rdquo;`;
        });
}
