import axios from "axios";
// import demoData from "./demo.json";

const SERVER = "https://api.livinginhotel.com";
const FRONT_URL = `${SERVER}/api/v1/main`;
export const getFrontData = async () => {
  return await axios.get(FRONT_URL);
};

// test
// export const getFrontData = async () => {
//   const temp = new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       if (demoData) {
//         resolve(demoData);
//       } else {
//         reject("load err");
//       }
//     }, 100);
//   });

//   return temp;
// };
