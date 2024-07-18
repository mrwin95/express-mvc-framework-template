const client = require("../databases/init.redis");

const that = (module.exports = {
  // level 1 set Promise

  setPromise: async ({ key, value }) => {
    try {
      return new Promise((isOk, isError) => {
        client.set(key, value, (error, rs) => {
          return !isError ? isOk(rs) : isError(error);
        });
      });
    } catch (error) {}
  },

  getPromise: async (key) => {
    try {
      return new Promise((isOk, isError) => {
        client.get(key, (error, rs) => {
          return !isError ? isOk(rs) : isError(error);
        });
      });
    } catch (error) {}
  },
});
