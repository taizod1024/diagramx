import { AzureFunction } from '@azure/functions';
import { functionhelper } from '../share/FunctionHelper';

/** httptrigger function */
export const httpTrigger: AzureFunction = async function (context) {
  // blob create if not exist
  await functionhelper.checkBlobContainerIfNotExist(context);

  // response
  context.res = {
    headers: { 'Content-Type': 'application/json' },
    body: {
      test: 'test',
    },
  };
};
