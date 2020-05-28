window.onload = function() {

    const quotes = [{

        name: 'Stephen King',
        quote: 'this is example quote 1'
    }, {
        name: 'Kamrul hasan',
        quote: 'this is example quote 2'
    }, {

        name: 'Sazid Hasan',
        quote: 'this is example quote 3'
    }, {

        name: 'Raihannor Farid',
        quote: 'this is example quote 4'
    }, {

        name: 'Israt jahan preya',
        quote: 'this is example quote 5'
    }]

    const quoteBtn = document.querySelector('#quoteBtn');
    const quoteAuthor = document.querySelector('#quoteAuthor');
    const quote = document.querySelector('#quote');

    quoteBtn.addEventListener('click', function() {

        let number = Math.floor(Math.random() * quotes.length);

        quoteAuthor.innerHTML = quotes[number].name;
        quote.innerHTML = quotes[number].quote;
    });

}