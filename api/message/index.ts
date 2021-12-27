import { AzureFunction } from '@azure/functions';
import { UserInfo } from '../common/UserInfo';
// import azurestorage from 'azure-storage';

const httpTrigger: AzureFunction = async function (context) {
  try {
    const userinfo = new UserInfo();
    userinfo.get(context);
    context.res = {
      headers: { 'Content-Type': 'application/json' },
      body: {
        text: `Hello from the API(${userinfo.displayName})`,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default httpTrigger;
