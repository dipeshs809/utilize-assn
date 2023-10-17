import { v4 as uuidv4 } from "uuid";

// Generate a unique ID using uuid module
export function generateUid() {
  let uniqueId = uuidv4();
  uniqueId = uniqueId.replace(/-/g, "").substring(0, 24);
  return uniqueId;
}
