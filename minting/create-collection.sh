curl --request POST \
  --url https://staging.crossmint.com/api/2022-06-09/collections/ \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: YOUR_API_KEY' \
  --data '{
  "chain": "polygon",
  "metadata": {
    "description": "Awesome NFTs",
    "imageUrl": "ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw",
    "name": "Crossmint NFT",
    "symbol": "XMINT"
  }
}'