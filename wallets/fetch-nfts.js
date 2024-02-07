const baseUrl = "https://staging.crossmint.com/api";
const chain = "polygon";
const wallet = "0x1234abcde...";

const options = {
  method: "GET",
  headers: { "X-API-KEY": "YOUR_API_KEY" },
};

fetch(
  `${baseUrl}/2022-06-09/wallets/${chain}:${wallet}/nfts?page=1&perPage=20`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
