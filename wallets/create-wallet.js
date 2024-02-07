const options = {
  method: "POST",
  headers: { "X-API-KEY": "YOUR_API_KEY", "Content-Type": "application/json" },
  body: '{"chain":"ethereum","email":"testy@test.xyz"}',
};

fetch("https://staging.crossmint.com/api/v1-alpha1/wallets", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
