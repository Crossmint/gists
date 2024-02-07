curl --request POST \
  --url https://staging.crossmint.com/api/2022-06-09/collections/default-polygon/nfts \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: YOUR_API_KEY' \
  --data '{
  "metadata": {
    "name": "Crossmint NFT #1",
    "description": "Awesome NFT #1",
    "image": "ipfs://QmVhAkiT3XCPQUaZKHootfEfixmKVqSiq5Y7uVPZyFGQXw"
  },
  "recipient": "email:testy@test.xyz"
}'