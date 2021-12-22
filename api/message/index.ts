import { AzureFunction } from '@azure/functions'

const httpTrigger: AzureFunction = async function (context) {
  const header = context.req?.headers['x-ms-client-principal'];
  let userDetails = "no signed in";
  if (header) {
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    userDetails = JSON.parse(decoded).userDetails;
  }
  context.res = {
    headers: { "Content-Type": "application/json", },
    body: {
      text: `Hello from the API(${userDetails})`,
    }
  };
}

export default httpTrigger