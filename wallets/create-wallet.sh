curl --request POST \
  --url https://staging.crossmint.com/api/v1-alpha1/wallets \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: YOUR_API_KEY' \
  --data '{
  "chain": "ethereum",
  "email": "testy@test.xyz"
}'