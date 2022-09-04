import { AzureFunction } from '@azure/functions';
import { UserInfo } from '../share/UserInfo';
import { BlobServiceClient } from '@azure/storage-blob';

export const httpTrigger: AzureFunction = async function (context) {
  const blobconname = process.env.APP_BLOB_CONTAINER_NAME || '';
  context.log(`${blobconname}: begin`);

  const info: any = {};

  // blob create if not exist
  const blobservice = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING || ''
  );
  const containerclient = blobservice.getContainerClient(blobconname);
  if (await containerclient.exists()) {
    context.log(`${blobconname}: Container exists`);
  } else {
    context.log(`${blobconname}: Container created`);
    await blobservice.createContainer(blobconname);
  }

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
  context.log(`${blobconname}: end`);
  // throw 'aaa_error';
};
