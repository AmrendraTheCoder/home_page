const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-B9g6UX1cwQWzY2SD7L9Lp6UJ	'}
};

fetch('https://pro-api.coingecko.com/api/v3/simple/price?ids=bitcoin%2C%20dogecoin%2C%20ethereum&vs_currencies=usd&include_24hr_change=true', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));