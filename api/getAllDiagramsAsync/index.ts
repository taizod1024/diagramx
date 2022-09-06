import { AzureFunction } from '@azure/functions';
import { apihelper } from '../share/api/ApiHelper';
import { apidiagramhelper } from '../share/api/ApiDiagramHelper';

/** httptrigger function */
export const httpTrigger: AzureFunction = async function (context) {
  await apihelper.checkBlobContainerIfNotExist(context);
  const diagrams = await apidiagramhelper.getAllDiagmraNamesAsync();
  context.res = {
    headers: { 'Content-Type': 'application/json' },
    body: {
      diagrams,
    },
  };
};
