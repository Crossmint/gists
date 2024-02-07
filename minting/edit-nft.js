const options = {
  method: "PATCH",
  headers: { "X-API-KEY": "YOUR_API_KEY", "Content-Type": "application/json" },
  body: '{"metadata":{"name":"Crossmint NFT #1","description":"Super Awesome NFT #1","image":"ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw"}}',
};

fetch(
  "https://staging.crossmint.com/api/2022-06-09/collections/default-polygon/nfts/custom-id",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
