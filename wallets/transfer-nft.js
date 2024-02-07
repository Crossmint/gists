const options = {
  method: "POST",
  headers: { "X-API-KEY": "YOUR_API_KEY", "Content-Type": "application/json" },
  body: '{"chain":"polygon","contractAddress":"0xCONTRACT_ADDRESS","from":"0xFROM_ADDRESS","to":"0xTO_ADDRESS","tokenId":"123"}',
};

fetch("https://staging.crossmint.com/api/v1-alpha1/wallets/transfer", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
