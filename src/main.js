import 'bootstrap';
import './styles.css';
import { MoneyExchanger } from './../src/currency.js'
import $ from 'jquery';

$(document).ready(function () {
  $("#moneyForm").submit(function (event) {
    event.preventDefault();
    (async () => {
      let moolah = new MoneyExchanger();
      let amount = $("#amount").val();
      let changeTo = $("#target").val();
      const response = await moolah.exchangeCurrency();
      moolah.conversionKeys = Object.keys(response.conversion_rates)
      moolah.conversionValues = Object.values(response.conversion_rates)
      moolah.baseAmount = amount
      moolah.targetCurrency = changeTo
      moolah.getConversionRate();
      console.log(moolah.targetCurrency)
      console.log(moolah.exchangeRate)
      console.log(response);
      // function getAmount(response) {
      //   $("#results").append(`${response.conversion_rate} <br> ${response.conversion_result} <br> ${response.target}`)

      // }
      // getAmount(response);
    })();
  });

});