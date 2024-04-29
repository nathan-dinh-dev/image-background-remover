import axios from "axios";
import FormData from "form-data";
import * as fs from "fs";
import path from "path";
import "dotenv/config";

const inputPath = "./original-image.jpg";
const formData = new FormData();
formData.append("size", "auto");
formData.append(
  "image_file",
  fs.createReadStream(inputPath),
  path.basename(inputPath)
);

axios({
  method: "post",
  url: "https://api.remove.bg/v1.0/removebg",
  data: formData,
  responseType: "arraybuffer",
  headers: {
    ...formData.getHeaders(),
    "X-Api-Key": process.env.API_KEY,
  },
  encoding: null,
})
  .then((response) => {
    if (response.status != 200)
      return console.error("Error:", response.status, response.statusText);
    fs.writeFileSync("output.png", response.data);
  })
  .catch((error) => {
    return console.error("Request failed:", error);
  });
