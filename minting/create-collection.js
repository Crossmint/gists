const options = {
  method: "POST",
  headers: { "X-API-KEY": "YOUR_API_KEY", "Content-Type": "application/json" },
  body: '{"chain":"polygon","metadata":{"description":"Awesome NFTs","imageUrl":"ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw","name":"Crossmint NFT","symbol":"XMINT"}}',
};

fetch("https://staging.crossmint.com/api/2022-06-09/collections/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
