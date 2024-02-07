import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";

<CrossmintPaymentElement
  projectId="YOUR_PROJECT_ID"
  collectionId="YOUR_COLLECTION_ID"
  environment="staging"
  mintConfig={{
    type: "erc-721",
    totalPrice: "0.001",
    quantity: "1",
  }}
/>;
