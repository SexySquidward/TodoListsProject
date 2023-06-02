import { Amplify, Auth } from 'aws-amplify';
import * as ssm from '@aws-cdk/aws-ssm';
const userPoolId = ssm.StringParameter.valueFromLookup(this as any, '/TodoList/dev/userPoolId');
const userPoolWebClientId = ssm.StringParameter.valueFromLookup(this as any, '/TodoList/dev/userPoolClient');
const identityPoolId = ssm.StringParameter.valueFromLookup(this as any, '/TodoList/dev/identityPoolId');
Amplify.configure({
    Auth: {
  
      // REQUIRED - Amazon Cognito Region
      region: 'ap-southeast-2',
  
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: userPoolId,
  
      identityPoolId: identityPoolId,
  
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: userPoolWebClientId,
  
      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,
  
  
     
      
    }
  });
const currentConfig = Auth.configure()

export default currentConfig