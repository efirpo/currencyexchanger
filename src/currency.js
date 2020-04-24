export class MoneyExchanger {
    constructor() {
        this.conversionKeys;
        this.conversionValues;
        this.conversionRate;
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
            return false;
        }
    }

    convert() {
        this.targetAmount = (this.baseAmount * this.conversionRate)
    }

    getConversionRate() {
        for (let i = 0; i <= this.conversionKeys.length; i++) {
            if (this.conversionKeys[i] == this.targetCurrency) {
                this.exchangeRate = this.conversionValues[i]
            }
            break
        }

    }
}
