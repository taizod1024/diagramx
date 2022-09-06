import { apihelper } from '../share/api/ApiHelper';

/** api diagram helper class */
class ApiDiagramHelper {
  /** get all diagram */
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
/** api diagram helper object */
export const apidiagramhelper = new ApiDiagramHelper();
