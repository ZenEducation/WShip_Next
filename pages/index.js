import { Authenticator } from "@aws-amplify/ui-react";

export default function Home() {
  return (
    <Authenticator socialProviders={['google','facebook']}>
      {({ signOut, user }) => (
        console.log(user),
        <main>
          <h1>Welcome {user.username}!</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}