import React from 'react';
import { ChevronRight } from './components/icons';
import { useNavigation } from './NavigationContext';

interface Breadcrumb {
    name: string;
    path: string;
}

interface BreadcrumbsProps {
    trail: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ trail }) => {
    const navigate = useNavigation();

    if (!trail || trail.length <= 1) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="py-3">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                {trail.map((crumb, index) => (
                    <li key={crumb.path} className="flex items-center">
                        {index < trail.length - 1 ? (
                            <a 
                                href={crumb.path} 
                                onClick={(e) => { e.preventDefault(); navigate(crumb.path); }}
                                className="hover:underline hover:text-brand-blue"
                            >
                                {crumb.name}
                            </a>
                        ) : (
                            <span className="font-medium text-gray-700" aria-current="page">{crumb.name}</span>
                        )}
                        {index < trail.length - 1 && <ChevronRight className="w-4 h-4 ml-2 text-gray-400" />}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
