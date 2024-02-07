const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chain: "polygon",
    metadata: {
      name: "Crossmint NFT",
      symbol: "XMINT",
      description: "Awesome NFTs",
      imageUrl: "ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw",
    },
  }),
};

fetch("https://staging.crossmint.com/api/2022-06-09/collections/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
