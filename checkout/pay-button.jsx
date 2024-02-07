import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

// Add this component next to your minting button
<CrossmintPayButton
  projectId="YOUR_PROJECT_ID"
  collectionId="YOUR_COLLECTION_ID"
  environment="ENVIRONMENT"
  mintConfig={{
    type: "erc-721",
    totalPrice: "0.001",
    quantity: 1,
  }}
/>;
