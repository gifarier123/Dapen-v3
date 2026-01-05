import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-corporate-900 overflow-hidden">
      {/* Background Overlay & Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Corporate Building" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-900 via-corporate-900/95 to-corporate-900/40"></div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-accent-600/20 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <ShieldCheck className="w-4 h-4 text-accent-500" />
            <span className="text-xs font-semibold text-white tracking-wide uppercase">Dapen Jasa Marga</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Mewujudkan Masa Depan <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">
              Sejahtera & Bahagia
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Kami mengelola dana pensiun karyawan Jasa Marga dengan prinsip kehati-hatian, transparansi, dan profesionalisme untuk memberikan manfaat pasti di hari tua.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex items-center justify-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-accent-600/20">
              <span>Layanan Peserta</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all hover:border-white/40">
              <span>Tentang Kami</span>
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">1983</span>
              <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Tahun Berdiri</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">4.000+</span>
              <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Peserta</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">100%</span>
              <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Komitmen Layanan</span>
            </div>
             <div className="hidden md:flex flex-col">
              <span className="text-4xl font-bold text-white mb-1">PPMP</span>
              <span className="text-sm font-medium text-accent-400 uppercase tracking-wider">Program Manfaat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};