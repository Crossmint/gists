const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chain: "polygon",
    tokenId: "123",
    fromAddress: "0x_FROM_ADDRESS",
    toAddress: "0x_TO_ADDRESS",
    tokenMintAddress: "0x_CONTRACT_ADDRESS",
  }),
};

fetch("https://staging.crossmint.com/api/v1-alpha1/transfer", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
