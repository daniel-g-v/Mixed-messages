let randomNumGenerator = (arrLength) => {
    return Math.floor(Math.random()*(arrLength-1))
};

const historicalQuotes = {
    // Motivational quotes  
    mainQuote : ['Aspire to', 'Change your thinking to', 'Have enough courage to', 'Be determined to','Dream to', 'Expect to'],
    lastPart : ['inspire before we expire', 'remember anything', 'start and enough heart to finish', 'be a rainbow in someones cloud', 'do what is right', 'lose but something to gain'],
    authors : ['T.S Elliot', 'Mark Twain', 'Pablo Picasso', 'Leonardo Da Vinci', 'Walt Disney', 'Buddha', 'Nelson Mandela']
};

const quoteGenerator = () => {
    console.log('Not so inspirational nor historical Quotes')
    for (let i=1; i<=3; i++){
        let mainNum = randomNumGenerator(historicalQuotes['mainQuote'].length);
        let lastNum = randomNumGenerator(historicalQuotes['lastPart'].length);
        let authorNum = randomNumGenerator(historicalQuotes['authors'].length);
        console.log(`${historicalQuotes['authors'][authorNum]} once said: ${historicalQuotes['mainQuote'][mainNum]} ${historicalQuotes['lastPart'][lastNum]}`)
    };
};

quoteGenerator();