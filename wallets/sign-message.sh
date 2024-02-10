curl --request POST \
  --url https://staging.crossmint.com/api/v1-alpha1/wallets/polygon:0x_SIGNING_WALLET/signMessage \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: YOUR_API_KEY' \
  --data '{
  "message": "The message to be signed"
}'