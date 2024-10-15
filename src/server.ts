import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import * as fs from 'node:fs'
import path from 'path'
import { helloWorld, HelloWorldPackage } from './services/hello_world.js'

const PROTO_DIR = './src/protos'
const PROTO_PATHS = fs
  .readdirSync(PROTO_DIR)
  .filter((file) => file.endsWith('.proto'))
  .map((file) => path.join(PROTO_DIR, file))

const packageDefinition = protoLoader.loadSync(PROTO_PATHS, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any

const helloWorldPackage = protoDescriptor.helloWorldPackage as HelloWorldPackage

const server = new grpc.Server()
server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    server.addService(helloWorldPackage.HelloWorldService.service, {
      HelloWorld: helloWorld,
    })
    if (error) {
      console.error('Error starting server:', error)
      return
    }
    console.log(`Server started on port ${port}`)
  },
)
