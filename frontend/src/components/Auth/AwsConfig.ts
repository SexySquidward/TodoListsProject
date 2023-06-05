import { Amplify, Auth } from 'aws-amplify';
import { SSM } from 'aws-sdk';
//import AWS from './config/aws'

// Create an instance of the SSM client
const ssm = new SSM({region: 'ap-southeast-2'});
const userPoolIdParam = '/TodoList/dev/userPoolId';
const userPoolWebClientIdParam = '/TodoList/dev/userPoolClient';

async function getParameter(parameterName: string): Promise<string> {
  try {
    const request: SSM.GetParameterRequest = {
      Name: parameterName,
      WithDecryption: true
    };

    const response = await ssm.getParameter(request).promise();

    return response.Parameter?.Value || '';
  } catch (error) {
    console.error('Failed to retrieve the parameter:', error);
    throw error;
  }
}

async function configureAmplify() {
  try {
    
    const userPoolId = await getParameter(userPoolIdParam);
    const userPoolWebClientId = await getParameter(userPoolWebClientIdParam);
    Amplify.configure({
      Auth: {
        region: 'ap-southeast-2',
        userPoolId: userPoolId,
        userPoolWebClientId: userPoolWebClientId,
        mandatorySignIn: true,
      }
    });

    const currentConfig = Auth.configure();
    
    return currentConfig;
  } catch (error) {
    console.error('Failed to configure Amplify:', error);
    throw error;
  }
}

export default async function initializeAmplify() {
  const currentConfig = await configureAmplify();
  
  // Perform any additional initialization or setup here
  return currentConfig;
}