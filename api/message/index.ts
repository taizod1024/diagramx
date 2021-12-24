import { AzureFunction } from '@azure/functions';
import { UserInfo } from '../common/UserInfo';

const httpTrigger: AzureFunction = async function (context) {
  const userinfo = new UserInfo();
  userinfo.get(context);
  context.res = {
    headers: { 'Content-Type': 'application/json' },
    body: {
      text: `Hello from the API(${userinfo.displayName})`,
    },
  };
};

export default httpTrigger;
