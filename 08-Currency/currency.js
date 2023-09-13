const convertCurrency = ( currency, exchangeRate) => {

    if(![currency, exchangeRate ].every(item=> typeof item === 'number')) throw new Eror ('Both currency and exchange rate must be a number!')
    if ([currency, exchangeRate].every(item => item === 0)) throw new Error('Both currency and exchange rate cannot be zero!');

    return currency*exchangeRate
}

module.exports = { convertCurrency };
