import * as grpc from '@grpc/grpc-js'
import { HelloWorldRequest, HelloWorldResponse } from '../generated/hello_world'

type HelloWorldService = {
  HelloWorld: grpc.handleUnaryCall<HelloWorldRequest, HelloWorldRequest>
}

export type HelloWorldPackage = {
  HelloWorldService: {
    service: grpc.ServiceDefinition<HelloWorldService>
  }
}

export const helloWorld = (
  call: grpc.ServerUnaryCall<HelloWorldRequest, HelloWorldResponse>,
  callback: grpc.sendUnaryData<HelloWorldResponse>,
) => {
  callback(null, { message: `Hello ${call.request.message}` })
}
