import React, { useState } from 'react';
import { ChevronDown } from './components/icons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-5 pt-0 text-gray-600">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;