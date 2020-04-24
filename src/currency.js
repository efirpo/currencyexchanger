export class MoneyExchanger {
    constructor() {
        this.exchangeRate;
        this.conversionRates;
        this.targetCurrency;
        this.baseAmount;
        this.targetAmount;
    }
    async exchangeCurrency() {
        try {
            let exchange = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`, {
                "method": "GET"
            });


            let jsonResponse;
            if (exchange.ok && exchange.status == 200) {
                jsonResponse = await exchange.json();
            } else {
                jsonResponse = false;
            }

            return jsonResponse;
        } catch (error) {
            alert(error)
        }
    }

    convert() {
        this.targetAmount = (this.baseAmount * this.exchangeRate).toFixed(2)
    }

    getConversionRate() {
        for (let i = 0; i < this.conversionRates.length; i++) {
            if (this.conversionRates[i][0] == this.targetCurrency) {
                this.exchangeRate = this.conversionRates[i][1]
            }
        }

    }
}



