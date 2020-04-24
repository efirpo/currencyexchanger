export class MoneyExchanger {
    async exchangeCurrency(amount, exchangefrom, exchangeto) {
        try {
            let exchange = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/pair/${exchangefrom}/${exchangeto}/${amount}`, {
                "method": "GET"
            })


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
}
