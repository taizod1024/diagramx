import { AzureFunction } from '@azure/functions'
const httpTrigger: AzureFunction = async function (context) {
    context.res = {
        headers: { "Content-Type": "application/json", },
        body: {
            text: '...',
        }
    };
}
export default httpTrigger
