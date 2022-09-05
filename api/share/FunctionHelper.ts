import { Context } from '@azure/functions';
import { BlobServiceClient } from '@azure/storage-blob';

/** function helper class */
class FunctionHelper {
  /** blob container name */
  blobconname = process.env.APP_BLOB_CONTAINER_NAME || '';

  /** blob service */
  blobservice = BlobServiceClient.fromConnectionString(
    process.env.AZURE_STORAGE_CONNECTION_STRING || ''
  );

  /** blob container client */
  containerclient = this.blobservice.getContainerClient(this.blobconname);

  /** create blob container if not exist */
  async checkBlobContainerIfNotExist(context: Context): Promise<void> {
    if (await this.containerclient.exists()) {
      context.log(`- container exists, container=${this.blobconname}`);
    } else {
      context.log(`- container created, container=${this.blobconname}`);
      await this.blobservice.createContainer(this.blobconname);
    }
  }
}
export const functionhelper = new FunctionHelper();
