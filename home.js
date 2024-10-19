var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dog");

var url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    // Assuming you want to update the innerText of the elements with prices
    btc.innerText = Bitcoin: $${data.bitcoin.usd};
    eth.innerText = Ethereum: $${data.ethereum.usd};
    doge.innerText = Dogecoin: $${data.dogecoin.usd};
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });