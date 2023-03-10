import {Amplify} from 'aws-amplify';
import awsconfig from '../aws-exports';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure({...awsconfig});
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
