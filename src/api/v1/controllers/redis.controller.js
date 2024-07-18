"use strict";

const { setPromise, getPromise } = require("../services/redis.service");

const that = (module.exports = {
  setPromise: async (req, res, next) => {
    try {
      const { key, payload } = req.body;
      return res.json({
        data: await setPromise(key, JSON.stringify(payload)),
      });
    } catch (error) {}
  },
});
