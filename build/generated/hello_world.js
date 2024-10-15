import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
const protobufPackage = "helloWorldPackage";
function createBaseHelloWorldRequest() {
  return { message: "" };
}
const HelloWorldRequest = {
  encode(message, writer = new BinaryWriter()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHelloWorldRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.message = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return HelloWorldRequest.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseHelloWorldRequest();
    message.message = object.message ?? "";
    return message;
  }
};
function createBaseHelloWorldResponse() {
  return { message: "" };
}
const HelloWorldResponse = {
  encode(message, writer = new BinaryWriter()) {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader.len : reader.pos + length;
    const message = createBaseHelloWorldResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message.message = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
  fromJSON(object) {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },
  toJSON(message) {
    const obj = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
  create(base) {
    return HelloWorldResponse.fromPartial(base ?? {});
  },
  fromPartial(object) {
    const message = createBaseHelloWorldResponse();
    message.message = object.message ?? "";
    return message;
  }
};
function isSet(value) {
  return value !== null && value !== void 0;
}
export {
  HelloWorldRequest,
  HelloWorldResponse,
  protobufPackage
};
//# sourceMappingURL=hello_world.js.map
