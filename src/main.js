import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animate.css'
import './styles.css';
import { MoneyExchanger } from './../src/currency.js'
import $ from 'jquery';

$(document).ready(function () {
  $("#moneyForm").submit(function (event) {
    event.preventDefault();
    (async () => {
      let moolah = new MoneyExchanger();
      const response = await moolah.exchangeCurrency();
      let amount = $("#amount").val();
      let changeTo = $("#target").val();
      moolah.baseAmount = amount
      moolah.targetCurrency = changeTo
      moolah.conversionRates = Object.entries(response.conversion_rates)
      moolah.getConversionRate();
      moolah.convert();
      console.log(moolah.targetAmount)
      checkResponse(response);
      function checkResponse(response) {
        if (response == undefined) {
          $("#results").append("We're sorry, something went wrong. Please try a different currency.")
        } else {
          $("#results").fadeIn();
          $("#start-money").html(`${moolah.baseAmount} USD`)
          $("#end-money").html(`${moolah.targetAmount} ${moolah.targetCurrency}`)
        }
      }
    })();
  });

});