
import './App.css'


import {
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator:  unknown;
}

function App({ isPassedToWithAuthenticator, signOut, user }: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error(`isPassedToWithAuthenticator was not provided`);
  }

  return (
    <>
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthenticator(App);

export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}


