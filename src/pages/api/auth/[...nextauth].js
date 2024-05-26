import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (credentials.username === 'admin@thesovereignwealth.com' && credentials.password === 'password3030') {
          return { id: 1, name: 'User' };
        }
        return null;
      }
    }),
    // add other providers here
  ],
  pages: {
    signIn: '/signin', 
  },
});
