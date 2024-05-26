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
        const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
        const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

        if (credentials.username === adminUsername && credentials.password === adminPassword) {
          return { id: 1, name: 'User' };
        }
        return null;
      }
    }),
    //other providers here
  ],
  pages: {
    signIn: '/signin', 
  },
});
