export function getExtensionFromBase64(v) {
  let imgData = v.split("/");
  let imageData = imgData[1].split(";");
  return imageData[0];
}
