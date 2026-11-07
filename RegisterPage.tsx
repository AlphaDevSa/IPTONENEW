
import React from 'react';
import Hero from './components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from './components/Card';
import { Label } from './components/Label';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { useNavigation } from './NavigationContext';

const RegisterPage: React.FC = () => {
    const navigate = useNavigation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for registration logic
        alert("Registration functionality is not yet implemented.");
        navigate('/');
    };
    
    return (
        <>
            <Hero
                title="Create an Account"
                subtitle="Join IPT One to manage your telecommunication services online."
                imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
            />
            <section className="py-16 bg-gray-50">
                <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">Sign Up</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" type="text" placeholder="Your Name" required />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="you@domain.com" required />
                                </div>
                                <div>
                                    <Label htmlFor="password">Create Password</Label>
                                    <Input id="password" type="password" placeholder="••••••••" required />
                                </div>
                                <Button type="submit" size="lg" className="w-full font-semibold">
                                    Create Account
                                </Button>
                                <p className="text-sm text-center text-gray-600">
                                    Already have an account?{' '}
                                    <button type="button" onClick={() => navigate('/login')} className="font-medium text-brand-blue hover:underline">
                                        Login here
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

export default RegisterPage;
