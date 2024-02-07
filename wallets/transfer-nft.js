const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chain: "polygon",
    contractAddress: "0x_CONTRACT_ADDRESS",
    from: "0x_FROM_ADDRESS",
    to: "0x_TO_ADDRESS",
    tokenId: "123",
  }),
};

fetch("https://staging.crossmint.com/api/v1-alpha1/wallets/transfer", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
