import { useState } from 'react';
import { useRouter } from 'next/router'; 
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function SignIn() {
  const router = useRouter(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false, // Do not redirecting automatically, we'll handle redirection manually
      });

      if (result.error) {
        setError(result.error); // Setting error message if sign-in fails
      } else {
        console.log('User successfully signed in');
        router.push('/dashboard'); // Redirecting to the dashboard upon successful sign-in
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', background: '#03234D', justifyContent: 'center' }}>
      <div style={{ marginBottom: '20px', zIndex: '1' }}>
        <Image src="/images/Logo.svg" alt="logo" width={200} height={100} />
      </div>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#03234D' }}>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Username</label>
            <input style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
            <input style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
          </div>
          <button style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
