import { AzureFunction } from '@azure/functions';
import { UserInfo } from '../share/UserInfo';
import { functionhelper } from '../share/FunctionHelper';

/** httptrigger function */
export const httpTrigger: AzureFunction = async function (context) {
  // blob create if not exist
  await functionhelper.checkBlobContainerIfNotExist(context);

  // response
  const info: any = {};
  const userinfo = new UserInfo(context);
  userinfo.get();
  info.userdisplayname = userinfo.displayName;
  context.res = {
    headers: { 'Content-Type': 'application/json' },
    body: {
      text: `swa api(${JSON.stringify(info)})`,
    },
  };
};
