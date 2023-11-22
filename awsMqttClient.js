import AWSMqtt from "aws-mqtt-client";

export  const mqttClient = new AWSMqtt({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
//   sessionToken: NEXT_PUBLIC_AWS_SESSION_TOKEN,
  endpointAddress: process.env.NEXT_PUBLIC_AWS_IOT_ENDPOINT_HOST,
  region: "us-east-1"
});

