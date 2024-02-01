// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/static-uv/uv/service/",
  bare: "https://uv.holyubofficial.net/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/static-uv/uv/uv.handler.js",
  client: "/static-uv/uv/uv.client.js",
  bundle: "/static-uv/uv/uv.bundle.js",
  config: "/static-uv/uv/uv.config.js",
  sw: "/static-uv/uv/uv.sw.js",
};
