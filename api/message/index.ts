import { AzureFunction } from '@azure/functions';
import { UserInfo } from '../common/UserInfo';
import azurestorage from 'azure-storage';

const httpTrigger: AzureFunction = async function (context) {
  console.log('aaa_begin');
  let info: any = {};
  // table storage
  let tableservice = azurestorage.createTableService();
  tableservice.createTableIfNotExists(
    'diagramt',
    function (error, result, response) {
      info.tableerror = error;
    }
  );
  // blob storage
  let blobservice = azurestorage.createBlobService();
  blobservice.createContainerIfNotExists(
    'diagramb',
    function (error, result, response) {
      info.bloberror = error;
    }
  );
  // response
  const userinfo = new UserInfo();
  userinfo.get(context);
  info.userdisplayname = userinfo.displayName;
  context.res = {
    headers: { 'Content-Type': 'application/json' },
    body: {
      text: `swa api(${JSON.stringify(info)})`,
    },
  };
  console.log('aaa_end');
  throw 'aaa_error';
};

export default httpTrigger;
