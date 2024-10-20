// const options = {
//   method: 'GET',
//   headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-B9g6UX1cwQWzY2SD7L9Lp6UJ	'}
// };

// fetch('https://pro-api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20dogecoin%2C%20ethereum&vs_currencies=usd&include_24hr_change=true', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    // Assuming you want to update the innerText of the elements with prices
    btc.innerText = `Bitcoin: $${data.bitcoin.usd}`;
    eth.innerText = `Ethereum: $${data.ethereum.usd}`;
    doge.innerText = `Dogecoin: $${data.dogecoin.usd}`;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });