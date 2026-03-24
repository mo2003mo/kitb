/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Menu, X, Download, Star, ChevronLeft, BookMarked, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Book {
  id: number;
  Series: string;
  Title: string;
  Info: string;
  Link: string;
  Writer: string;
  Section: string;
  Section_ID: string;
  Download: number;
  Real_Download: number;
  Photo_Link: string;
  BookSize: string;
  BookSize_TXT: string;
}

interface ApiData {
  TopReadingBook?: Book[];
  ReadingBookNow?: Book[];
  newnovbook?: Book[];
  newBook?: Book[];
  NewBookHDev?: Book[];
}

const API_URL = 'https://dev-ali5674.pantheonsite.io/tiktok/q.php';
const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(API_URL)}`;

const sectionsConfig = [
  { key: 'TopReadingBook', title: 'الكتب الأكثر قراءة', icon: <TrendingUp className="w-6 h-6 text-indigo-600" /> },
  { key: 'ReadingBookNow', title: 'يقرأ الآن', icon: <Clock className="w-6 h-6 text-indigo-600" /> },
  { key: 'newnovbook', title: 'روايات جديدة', icon: <BookMarked className="w-6 h-6 text-indigo-600" /> },
  { key: 'newBook', title: 'كتب جديدة', icon: <Sparkles className="w-6 h-6 text-indigo-600" /> },
  { key: 'NewBookHDev', title: 'إصدارات حديثة', icon: <Star className="w-6 h-6 text-indigo-600" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white p-2 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl text-slate-900 tracking-tight">مكتبتي<span className="text-indigo-600">.</span></span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">الرئيسية</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">الأقسام</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">الأكثر قراءة</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-semibold transition-colors">المؤلفون</a>
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-full transition-colors mr-4">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl font-semibold">الرئيسية</a>
              <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl font-semibold">الأقسام</a>
              <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl font-semibold">الأكثر قراءة</a>
              <a href="#" className="block px-4 py-3 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl font-semibold">المؤلفون</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-indigo-900 text-white overflow-hidden rounded-3xl mx-4 sm:mx-8 mt-8 mb-16 shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 px-8 py-16 sm:py-24 lg:px-16 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6"
        >
          عالم من المعرفة <br/>
          <span className="text-amber-400">بين يديك</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl leading-relaxed"
        >
          اكتشف آلاف الكتب والروايات العربية والعالمية. اقرأ، حمل، واستمتع بأفضل الإصدارات في مكان واحد.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-amber-500 hover:bg-amber-400 text-indigo-950 px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-amber-500/30 flex items-center justify-center">
            تصفح الكتب
            <BookOpen className="w-5 h-5 mr-2" />
          </button>
          <div className="relative flex-grow max-w-md">
            <input 
              type="text" 
              placeholder="ابحث عن كتاب أو مؤلف..." 
              className="w-full bg-white/10 border border-white/20 text-white placeholder-indigo-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/20 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-200 w-5 h-5" />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute right-20 top-0 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

const BookCard = ({ book }: { book: Book }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full group"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-100">
        <img 
          src={book.Photo_Link} 
          alt={book.Title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop';
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
          {book.Section}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-slate-900 line-clamp-1 mb-1" title={book.Title}>{book.Title}</h3>
        <p className="text-slate-500 text-sm mb-3">{book.Writer}</p>
        
        <p className="text-slate-600 text-sm line-clamp-2 mb-4 flex-grow" title={book.Info}>
          {book.Info}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-slate-500 text-xs">
            <div className="flex items-center" title="عدد التحميلات">
              <Download className="w-4 h-4 ml-1" />
              <span>{book.Download.toLocaleString()}</span>
            </div>
          </div>
          <a 
            href={book.Link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-300 flex items-center"
          >
            تحميل
            <ChevronLeft className="w-4 h-4 mr-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const BookSection = ({ title, icon, books }: { title: string, icon: React.ReactNode, books: Book[] }) => {
  if (!books || books.length === 0) return null;
  
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-8 px-4 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-100 p-3 rounded-2xl">
            {icon}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
        </div>
        <button className="hidden sm:flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
          عرض الكل
          <ChevronLeft className="w-5 h-5 mr-1" />
        </button>
      </div>
      
      <div className="px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.slice(0, 5).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      
      <div className="mt-8 px-4 sm:hidden">
        <button className="w-full flex items-center justify-center bg-indigo-50 text-indigo-600 font-semibold py-3 rounded-xl hover:bg-indigo-100 transition-colors">
          عرض الكل
          <ChevronLeft className="w-5 h-5 mr-1" />
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 text-white p-2 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">مكتبتي<span className="text-indigo-500">.</span></span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              مكتبتي هي منصتك الأولى لتحميل وقراءة أفضل الكتب والروايات العربية والعالمية. نسعى لنشر المعرفة وتسهيل الوصول إليها للجميع.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">الرئيسية</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">أحدث الكتب</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">الأكثر تحميلاً</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">الأقسام</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">روايات عربية</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">روايات مترجمة</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">تنمية بشرية</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">كتب تاريخية</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} مكتبتي. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        let json = await response.json();
        
        if (json.status === 'success') {
          setData(json.data);
        } else {
          throw new Error('API returned error status');
        }
      } catch (err) {
        console.log('Direct fetch failed, trying proxy...', err);
        try {
          let response = await fetch(PROXY_URL);
          if (!response.ok) throw new Error('Proxy response was not ok');
          let json = await response.json();
          if (json.status === 'success') {
            setData(json.data);
          } else {
            throw new Error('API returned error status via proxy');
          }
        } catch (proxyErr) {
           setError('حدث خطأ أثناء جلب البيانات. يرجى المحاولة لاحقاً.');
           console.error(proxyErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow max-w-[1600px] mx-auto w-full">
        <Hero />
        
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-medium text-lg">جاري تحميل المكتبة...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
            <div className="bg-red-100 text-red-600 p-4 rounded-full mb-4">
              <X className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">عذراً!</h2>
            <p className="text-slate-600">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              إعادة المحاولة
            </button>
          </div>
        ) : data ? (
          <div className="space-y-4 pb-16">
            {sectionsConfig.map((section) => (
              <BookSection 
                key={section.key} 
                title={section.title} 
                icon={section.icon} 
                books={data[section.key as keyof ApiData] || []} 
              />
            ))}
          </div>
        ) : null}
      </main>
      
      <Footer />
    </div>
  );
}
