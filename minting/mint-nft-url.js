const options = {
  method: "POST",
  headers: {
    "X-API-KEY": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    metadata: {
      name: "Crossmint NFT #1",
      description: "Awesome NFT #1",
      image: "ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw",
    },
    recipient: "email:testy@test.xyz:polygon",
  }),
};

const baseUrl = "https://staging.crossmint.com/api";
const collectionId = "YOUR_COLLECTION_ID";

fetch(`${baseUrl}/2022-06-09/collections/${collectionId}/nfts`, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
