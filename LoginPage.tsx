
import React from 'react';
import Hero from './components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from './components/Card';
import { Label } from './components/Label';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const LoginPage: React.FC = () => {
    const navigate = useNavigation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for login logic
        alert("Login functionality is not yet implemented.");
        navigate('/');
    };

    return (
        <>
            <Hero
                title="Client Login"
                subtitle="Access your account to manage your services."
                imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop"
            />
            <section className="py-16 bg-gray-50">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">Welcome Back</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="you@domain.com" required />
                                </div>
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" type="password" placeholder="••••••••" required />
                                </div>
                                <Button type="submit" size="lg" className="w-full font-semibold">
                                    Login
                                </Button>
                                <p className="text-sm text-center text-gray-600">
                                    Don't have an account?{' '}
                                    <button type="button" onClick={() => navigate('/register')} className="font-medium text-brand-blue hover:underline">
                                        Register here
                                    </button>
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
