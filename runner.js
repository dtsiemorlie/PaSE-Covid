const reader = require("./reader");
const Case = require("./database");
const moment = require("moment");
const countries = require("./countries");

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const date = moment(yesterday).format("MM-DD-YYYY");
/*console.log(date);*/
const url = `https://raw.githubusercontent.com/CSSEGISandData/Covid-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv`;

const getUpdate = async function () {
  reader(url, countries, Case);
};
const hours = 24;
const interval = hours * 3600000; //24hrs in milli seconds

setInterval(function () {
  //catch all the errors
  getUpdate().catch(console.log);
}, interval);
