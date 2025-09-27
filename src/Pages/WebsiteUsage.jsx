import React from 'react';

const WebsiteUsage = () => {
    return (
        <section className="relative lg:px-20 px-5 lg:py-20 py-14 bg-gradient-to-br from-[#f8fbff] to-[#eef7ff] overflow-hidden">
            <div className="absolute top-0 -left-20 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#0047FF]/20 rounded-full blur-3xl"></div>
            <div className="text-center">
                <h1 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#00C6FF] to-[#0047FF] bg-clip-text text-transparent animate-pulse">
                    🚧 Coming Soon 🚧
                </h1>
                <p className="text-lg md:text-2xl font-medium text-gray-300">
                    Our Website Usage Policy details are on the way. Stay tuned!
                </p>
            </div>
        </section>
    );
};

export default WebsiteUsage;
