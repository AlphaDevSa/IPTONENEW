import React, { createContext, useContext } from 'react';

// Define the shape of the context value
type NavigationContextType = (path: string) => void;

// Create the context with a default no-op function to prevent errors
const NavigationContext = createContext<NavigationContextType>(() => {
  console.error("Navigate function called outside of a NavigationProvider.");
});

/**
 * A custom hook that simplifies accessing the navigation function from the context.
 * @returns The navigate function.
 */
export const useNavigation = () => useContext(NavigationContext);

// Export the provider component to be used in App.tsx
export const NavigationProvider = NavigationContext.Provider;
