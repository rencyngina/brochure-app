export default async function signIn(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Example: Perform authentication
    if (username === 'example' && password === 'password3030') {
      // If authentication is successful, you can return a success message or user data
      res.status(200).json({ message: 'Authentication successful' });
    } else {
      // If authentication fails, return an error message
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    // If the request method is not POST, return method not allowed
    res.status(405).end();
  }
}