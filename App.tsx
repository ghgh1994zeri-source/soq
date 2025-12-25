
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { CategoryBar } from './components/CategoryBar';
import { HomeCategoryGrid } from './components/HomeCategoryGrid';
import { AdCard } from './components/AdCard';
import { PostAdModal } from './components/PostAdModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { FilterSidebar } from './components/FilterSidebar';
import { ChatBot } from './components/ChatBot';
import { AdDetailsModal } from './components/AdDetailsModal';
import { SellerProfile } from './components/SellerProfile';
import { ChatWindow } from './components/ChatWindow';
import { WelcomeScreen } from './components/WelcomeScreen';
import { InfoModal, InfoPageType } from './components/InfoModal';
import { WalletModal } from './components/WalletModal'; 
import { HeroVideo } from './components/HeroVideo';
import { SpotlightBanner } from './components/SpotlightBanner';
import { UserSettings } from './components/UserSettings'; 
import { StoriesBar } from './components/StoriesBar'; 
import { MOCK_CORPORATE_ADS, CATEGORIES as INITIAL_CATEGORIES, MOCK_USERS } from './constants';
import { Ad, FilterState, User, CorporateAd, Category, CallSession } from './types';
import { SearchX, AlertTriangle, RefreshCw, Database, ShieldAlert, Cpu, Globe } from 'lucide-react'; 
import { supabase } from './services/supabaseClient';
import { useStore } from './store/useStore';

const App = () => {
  const { favorites, syncFavorites, addNotification } = useStore();
  const [ads, setAds] = useState<Ad[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [dbError, setDbError] = useState<string | null>(null);
  const [isEmptyState, setIsEmptyState] = useState(false);
  const [view, setView] = useState<'home' | 'profile' | 'favorites' | 'settings'>('home');
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<InfoPageType>(null);
  const [chatRecipient, setChatRecipient] = useState<User | null>(null);
  const [chatAd, setChatAd] = useState<Ad | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    categoryId: null, subCategoryId: null, minPrice: null, maxPrice: null, 
    location: null, searchTerm: '', minRooms: undefined, make: undefined, 
    minYear: undefined, minArea: undefined, maxArea: undefined, applianceType: undefined
  });

  const fetchAds = useCallback(async () => {
      setDbError(null);
      setIsEmptyState(false);
      try {
        const { data, error } = await supabase.from('ads').select('*').order('created_at', { ascending: false });
        if (error) { setDbError(error.message); return; }
        if (data && data.length > 0) {
            setAds(data.map((item: any) => ({
                id: item.id, title: item.title, description: item.description, price: item.price || 0, currency: 'ل.س',
                categoryId: item.category_id || 'others', subCategoryId: item.sub_category_id, location: item.location || 'دمشق',
                images: item.images || [], createdAt: item.created_at, ownerId: item.created_by, ownerName: item.owner_name || 'مستخدم', 
                ownerPhone: item.owner_phone || '', status: item.status || 'pending', isFeatured: item.is_featured || false,
                attributes: item.attributes || {}, inspection_result: item.inspection_result
            })));
        } else { setIsEmptyState(true); }
      } catch { setDbError("خطأ في الاتصال."); }
  }, []);

  useEffect(() => { fetchAds(); }, [fetchAds]);

  useEffect(() => { if (isDarkMode) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); }, [isDarkMode]);

  const filteredAds = useMemo(() => {
    let result = ads;
    if (view === 'favorites') return result.filter(ad => favorites.includes(ad.id));
    result = result.filter(ad => {
      if (filters.categoryId && ad.categoryId !== filters.categoryId) return false;
      if (filters.location && ad.location !== filters.location) return false;
      if (filters.searchTerm && !ad.title.toLowerCase().includes(filters.searchTerm.toLowerCase())) return false;
      return true;
    });
    return result;
  }, [ads, filters, view, favorites]);

  return (
    <div className="min-h-screen flex flex-col bg-customGray dark:bg-darkBg transition-colors duration-300">
      
      {/* Debug Overlay for Developer */}
      <div className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2">
          {!process.env.API_KEY && (
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-[10px] font-bold shadow-2xl flex items-center gap-2 animate-pulse">
                  <Cpu size={14}/> API_KEY NOT INJECTED (Manual Upload Issue)
              </div>
          )}
          <div className="bg-primary text-white px-4 py-2 rounded-full text-[10px] font-bold shadow-2xl flex items-center gap-2 border border-secondary/30">
              <Globe size={14}/> Target: Syria Marketplace
          </div>
      </div>

      <Navbar 
          onPostClick={() => currentUser ? setIsPostModalOpen(true) : setIsAuthModalOpen(true)} 
          searchTerm={filters.searchTerm} onSearchChange={(v) => setFilters(p => ({...p, searchTerm: v}))} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          currentUser={currentUser} onLoginClick={() => setIsAuthModalOpen(true)} onLogout={() => supabase.auth.signOut()}
          onCorporateClick={() => {}} ads={ads} onAdSelect={setSelectedAd}
          onCategorySelect={(id) => setFilters(p => ({...p, categoryId: id, subCategoryId: null}))} onMyAdsClick={() => setView('settings')} 
          onMessagesClick={() => {}} onLogoClick={() => setView('home')}
          onInfoClick={setInfoModalType} onWalletClick={() => {}}
      />

      <main className="flex-grow">
          {dbError || isEmptyState ? (
              <div className="container mx-auto px-4 py-12 text-center">
                  <Database className="mx-auto mb-4 text-gray-400" size={48}/>
                  <h2 className="text-xl font-bold dark:text-white">لا توجد بيانات حالياً</h2>
                  <p className="text-gray-500 mb-6">تأكد من إعدادات Supabase وجدول الإعلانات.</p>
                  <button onClick={fetchAds} className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 mx-auto"><RefreshCw size={18}/> تحديث</button>
              </div>
          ) : (
            <>
              {view === 'home' && (
                <>
                  <HeroVideo />
                  <StoriesBar ads={ads} onAdClick={setSelectedAd} onAddStory={() => setIsPostModalOpen(true)} currentUser={currentUser} />
                  <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6 mt-8">
                    <div className="hidden lg:block"><FilterSidebar filters={filters} setFilters={setFilters} categories={INITIAL_CATEGORIES} /></div>
                    <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredAds.map(ad => <AdCard key={ad.id} ad={ad} onClick={() => setSelectedAd(ad)} />)}
                    </section>
                  </div>
                </>
              )}
              {view === 'settings' && currentUser && <UserSettings user={currentUser} onUpdateUser={setCurrentUser} onLogout={() => supabase.auth.signOut()} onBack={() => setView('home')} onInfoClick={setInfoModalType} />}
            </>
          )}
      </main>

      <Footer onLinkClick={setInfoModalType} />
      <ChatBot ads={ads} onAdClick={setSelectedAd} /> 
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onLoginSuccess={setCurrentUser} />
      <PostAdModal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)} onAddAd={async () => {}} currentUser={currentUser} onRequireLogin={() => setIsAuthModalOpen(true)} categories={INITIAL_CATEGORIES} />
      {selectedAd && <AdDetailsModal isOpen={true} onClose={() => setSelectedAd(null)} ad={selectedAd} currentUser={currentUser} onLoginClick={() => setIsAuthModalOpen(true)} onSellerClick={() => {}} onChatClick={(u) => setChatRecipient(u)} />}
      <ChatWindow isOpen={!!chatRecipient} onClose={() => setChatRecipient(null)} recipient={chatRecipient} currentUser={currentUser || {id:'', name:'', phone:'', joinDate:'', isVerified:false}} />
    </div>
  );
};

export default App;
