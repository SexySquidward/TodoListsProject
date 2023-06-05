import { Amplify, Auth } from 'aws-amplify';
 function configureAmplify() {
  try {
   Amplify.configure({
      Auth: {
        region: import.meta.env.VITE_AWS_REGION,
        userPoolId: import.meta.env.VITE_AWS_USERPOOL_ID,
        userPoolWebClientId: import.meta.env.VITE_AWS_USERPOOL_WEBCLIENT_ID,
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

export default function initializeAmplify() {
  const currentConfig = configureAmplify();
  
  // Perform any additional initialization or setup here
  return currentConfig;
}