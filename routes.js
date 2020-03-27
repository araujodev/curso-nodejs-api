import hello from "./hello/index.js";
import bills from "./bills/index.js";

export default app => {
  app.use("/", hello);
  app.use("/bills", bills);
};
