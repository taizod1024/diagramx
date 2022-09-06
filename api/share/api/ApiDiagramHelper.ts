import { apihelper } from './ApiHelper';

/** user info class */
class ApiDiagramHelper {
  async getAllDiagmraNamesAsync(): Promise<string[]> {
    // response
    const blobs = apihelper.containerclient.listBlobsFlat();
    const diagrams = [];
    for await (const blob of blobs) {
      diagrams.push(blob.name);
    }
    return diagrams;
  }
}
export const apidiagramhelper = new ApiDiagramHelper();
