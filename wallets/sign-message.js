const options = {
  method: "POST",
  headers: { "X-API-KEY": "YOUR_API_KEY", "Content-Type": "application/json" },
  body: JSON.stringify({
    message: "The message to be signed",
  }),
};

const baseUrl = "https://staging.crossmint.com/api";
const chain = "polygon";
const wallet = "0x_SIGNING_WALLET";

fetch(`${baseUrl}/v1-alpha1/wallets/${chain}:${wallet}/signMessage`, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
