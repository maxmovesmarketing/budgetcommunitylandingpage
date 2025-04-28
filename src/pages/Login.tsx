import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      // Handle registratie logica
    } else {
      // Handle login logica
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-background/50 rounded-lg shadow-sm border border-text/10">
        <h1 className="font-paradiso text-3xl md:text-5xl leading-[1.2] text-center text-text">
          {isRegistering ? 'Registreren' : 'Inloggen'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <div className="space-y-2">
              <Label htmlFor="name">Naam</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">E-mailadres</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Wachtwoord</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {isRegistering && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Bevestig wachtwoord</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <Button type="submit" className="w-full">
            {isRegistering ? 'Registreren' : 'Inloggen'}
          </Button>
        </form>
        <div className="text-center text-sm text-text/80 space-y-2">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="hover:text-text underline"
          >
            {isRegistering ? 'Heb je al een account? Inloggen' : 'Nog geen account? Registreren'}
          </button>
          {!isRegistering && (
            <div>
              <a href="/wachtwoord-vergeten" className="hover:text-text underline">
                Wachtwoord vergeten?
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-text/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-background/50 text-text/80">
              Of ga verder met
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="w-full">
            Google
          </Button>
          <Button variant="outline" className="w-full">
            Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
