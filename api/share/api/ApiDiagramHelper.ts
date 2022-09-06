import { apihelper } from './ApiHelper';

/** user info class */
class ApiDiagramHelper {
  async getAllDiagmraNamesAsync(): Promise<string[]> {
    // response
    const blobs = apihelper.containerclient.listBlobsFlat();
    const names = [];
    for await (const blob of blobs) {
      names.push(blob.name);
    }
    return names;
  }
}
export const apidiagramhelper = new ApiDiagramHelper();
