const helloWorld = (call, callback) => {
  callback(null, { message: `Hello ${call.request.message}` });
};
export {
  helloWorld
};
//# sourceMappingURL=hello_world.js.map
