import React from 'react';
import { Target, Flag, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-3">Tentang Dapen Jasa Marga</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-corporate-900 mb-6">Integritas dalam Pengelolaan Dana</h3>
          <p className="text-gray-600 leading-relaxed">
            Dana Pensiun Jasa Marga didirikan oleh PT Jasa Marga (Persero) Tbk untuk menyelenggarakan Program Pensiun Manfaat Pasti bagi karyawan, guna memberikan kesinambungan penghasilan di hari tua.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-corporate-900/60 flex items-center justify-center p-8">
               <div className="text-white text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-accent-500" />
                  <h4 className="text-2xl font-bold mb-2">Terakreditasi & Diawasi</h4>
                  <p className="text-corporate-100">Diawasi oleh Otoritas Jasa Keuangan (OJK)</p>
               </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <div className="bg-corporate-50 p-8 rounded-2xl border border-corporate-100 transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-accent-600">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-corporate-900">Visi Kami</h4>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Menjadi Pengelola Dana Pensiun yang Profesional, Sehat, dan Terpercaya untuk memberikan pelayanan terbaik dan manfaat optimal bagi peserta."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                 <div className="bg-corporate-50 p-3 rounded-lg shadow-sm text-accent-600">
                  <Flag className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-corporate-900">Misi Kami</h4>
              </div>
              <ul className="space-y-4">
                {[
                  "Mengelola iuran dan aset bersih dengan prinsip Good Corporate Governance.",
                  "Membayar manfaat pensiun secara tepat waktu, tepat jumlah, dan tepat subjek.",
                  "Memberikan pelayanan prima kepada seluruh peserta pensiun.",
                  "Meningkatkan kinerja investasi secara berkelanjutan."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Management Values - Simple Bar */}
        <div className="bg-corporate-900 rounded-3xl p-10 text-white shadow-2xl overflow-hidden relative">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold mb-2">Tata Nilai Perusahaan</h4>
              <p className="text-corporate-200">Landasan kami dalam melayani Anda</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto">
              {['Amanah', 'Kompeten', 'Harmonis', 'Loyal'].map((val) => (
                <div key={val} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:bg-accent-600 hover:border-transparent transition-colors cursor-default">
                  <span className="font-bold tracking-wider">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
        </div>
      </div>
    </section>
  );
};