import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.MOBILECHAT_GRAPHQLAPIENDPOINT;
const GRAPHQL_API_KEY = process.env.MOBILECHAT_GRAPHQLAPIKEY;

const query = /* GraphQL */ `
  mutation CREATE_USER($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      createdAt
      imageUri
      status
      Messages {
        items {
          id
        }
      }
      chatrooms {
        items {
          id
        }
      }
      updatedAt
      _deleted
      _lastChangedAt
      _version
    }
  }
`;

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event, context) => {
  // insert code to be executed by your lambda trigger
  console.log(`EVENT: ${JSON.stringify(event)}`);

  if (!event?.request?.userAttributes?.sub) {
    console.log('No sub provided');
    return
  }

  const variables = {
    input: {
      id: event.request.userAttributes.sub,
      name: event.request.userAttributes.name
    }
  };

  /** @type {import('node-fetch').RequestInit} */
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY
    },
    body: JSON.stringify({ query, variables })
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack
        }
      ]
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
};
