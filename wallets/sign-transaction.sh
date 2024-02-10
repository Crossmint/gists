curl "https://staging.crossmint.com/api/v1-alpha1/wallets/ethereum:0x7e3c09cB46A351Db7834c0E0Bc0CB0cD79A/transactions/signatures" \
-H "X-PROJECT-ID: your_project_id" \
-H "X-CLIENT-SECRET: your_client_secret" \
-H 'Content-Type: application/json' \
--data '
{
  "transaction": {
    "nonce": 5,
    "gasPrice": "34329341655",
    "gasLimit": 21000,
    "to": "0x4675c7e5baafbffbca748158becba61ef3b03",
    "value": "0",
    "data": "",
    "from": "0x199d5ed7f45f4ee35960cf22eade205b253f"
  }
}'