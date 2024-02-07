curl --request PATCH \
  --url https://staging.crossmint.com/api/2022-06-09/collections/default-polygon/nfts/custom-id \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: YOUR_API_KEY' \
  --data '{
  "metadata": {
    "name": "Crossmint NFT #1",
    "description": "Super Awesome NFT #1",
    "image": "ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw"
  }
}'