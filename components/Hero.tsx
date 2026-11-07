
import React from 'react';

interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
  imageUrl?: string;
  badge?: React.ReactNode;
  visual?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, children, imageUrl, badge, visual }) => {
  return (
    <div className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gray-900 text-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px]"></div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            {/* Optional Image Overlay for context but keeping dark theme dominant */}
            {imageUrl && !visual && (
                 <div className="absolute inset-0 z-0">
                    <img src={imageUrl} alt="Background" className="w-full h-full object-cover opacity-10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/90"></div>
                 </div>
            )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {visual ? (
                // 2-Column Layout (Consistent with Web Hosting)
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left">
                        {badge && (
                            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-brand-green border border-white/10 mb-8">
                                {typeof badge === 'string' ? <span>{badge}</span> : badge}
                            </div>
                        )}
                        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            {title}
                        </h1>
                        <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {children}
                        </div>
                    </div>
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        {visual}
                    </div>
                </div>
            ) : (
                // Centered Layout (Legacy / Generic Pages)
                <div className="text-center max-w-4xl mx-auto">
                    {badge && (
                        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm font-medium text-brand-green border border-white/10 mb-8 mx-auto">
                            {typeof badge === 'string' ? <span>{badge}</span> : badge}
                        </div>
                    )}
                    <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {children}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default Hero;
