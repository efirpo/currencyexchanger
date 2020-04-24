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
      console.log(moolah);
      console.log(amount);
      console.log(changeTo);
      const response = await moolah.exchangeCurrency(amount, "USD", changeTo);
      console.log(response);
      function getAmount(response) {
        $("#results").append(`${response.conversion_rate} <br> ${response.conversion_result} <br> ${response.target}`)

      }
      getAmount(response);
    })
  })

});