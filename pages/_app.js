import '@/styles/globals.css'
import awsExports from "../src/aws-exports";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


Amplify.configure({...awsExports,ssr: true });
export default function App({ Component, pageProps }) {
  return (
    <Authenticator>

  <Component {...pageProps} />
    </Authenticator>
  )
}
