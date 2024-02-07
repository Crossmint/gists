const options = { method: "GET", headers: { "X-API-KEY": "YOUR_API_KEY" } };

fetch(
  "https://staging.crossmint.com/api/2022-06-09/wallets/CHAIN:0xWALLET/nfts?page=1&perPage=20",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
