import { AzureFunction } from '@azure/functions';
import { UserInfo } from '../share/UserInfo';
import azurestorage from 'azure-storage';

const httpTrigger: AzureFunction = async function (context) {
  context.log('aaa_begin');
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
  const userinfo = new UserInfo(context);
  userinfo.get();
  info.userdisplayname = userinfo.displayName;
  context.res = {
    headers: { 'Content-Type': 'application/json' },
    body: {
      text: `swa api(${JSON.stringify(info)})`,
    },
  };
  context.log('aaa_end');
  // throw 'aaa_error';
};

export default httpTrigger;
