import "@/styles/globals.css";
import awsExports from "../src/aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

Amplify.configure({ ...awsExports, ssr: true });
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WShip Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Authenticator>
        <Component {...pageProps} />
      </Authenticator>
    </>
  );
}
