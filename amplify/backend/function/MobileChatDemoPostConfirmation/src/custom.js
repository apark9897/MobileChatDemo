const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const client = new DynamoDBClient({ region: "us-east-1" });

const tableName = process.env.USERTABLE;
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  // save new user to DynamoDB

  if (!event?.request?.userAttributes?.sub) {
    console.error('No sub provided');
    return;
  }

  const now = new Date();
  const timestamp = now.getTime();

  const userItem = {
    __typename: { S: 'Users' },
    _lastChangedAt: { N: timestamp.toString() },
    _version: { N: '1' },
    createdAt: { S: now.toISOString() },
    updatedAt: { S: now.toISOString() },
    id: { S: event.request.userAttributes.sub },
    name: { S: event.request.userAttributes.email },
  };

  const params = {
    TableName: tableName,
    Item: userItem
  };

  try {
    const command = new PutItemCommand(params);
    const data = await client.send(command);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
  return event
};
