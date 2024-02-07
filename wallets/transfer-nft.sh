curl --request POST \
  --url https://staging.crossmint.com/api/v1-alpha1/wallets/transfer \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: YOUR_API_KEY' \
  --data '{
  "chain": "polygon",
  "contractAddress": "0x_CONTRACT_ADDRESS",
  "from": "0x_FROM_ADDRESS",
  "to": "0x_TO_ADDRESS",
  "tokenId": "123"
}'