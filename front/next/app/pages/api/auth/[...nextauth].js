// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        try {
          // Vérifier les informations d'identification
          const response = await fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          const responseJson = await response.json();

          if (responseJson.token) {
            return Promise.resolve({ id: 1, name: 'User', email: credentials.email });
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error('Error authenticating user', error);
          return Promise.resolve(null);
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login',
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    }
  },
  session: {
    jwt: true
  },
  debug: process.env.NODE_ENV === 'development'
});
