import 'bootstrap';
import './styles.css';
import { MoneyExchanger } from './../src/currency.js'
import $ from "jquery";

$(document).ready(function () {
  let moolah = new MoneyExchanger();
  return moolah;
}