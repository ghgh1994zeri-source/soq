
import { Category, Ad, CorporateAd, AdPackage, Employee, FinancialRecord, Order, Payroll, PerformanceReview, LeaveRequest, BankAccount, Seller, Transaction, ModerationTicket, JobApplication, Invoice, GeneralLedgerEntry, User, Review } from './types';

export const LOCATIONS = [
  'دمشق', 'ريف دمشق', 'حلب', 'حمص', 'حماة', 'اللاذقية', 'طرطوس', 'إدلب', 'درعا', 'السويداء', 'القنيطرة', 'دير الزور', 'الحسكة', 'الرقة'
];

export const TRENDING_KEYWORDS = [
  'مولدة 5 كيلو', 'شقة بالمزة', 'كيا ريو 2010', 'لابتوب مستعمل', 'وظائف بدمشق', 'غرفة نوم صدف', 'موبايل شاومي', 'بطارية انفيرتر'
];

export const SYRIA_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'دمشق': { lat: 33.5138, lng: 36.2765 },
  'ريف دمشق': { lat: 33.5, lng: 36.4 },
  'حلب': { lat: 36.2021, lng: 37.1343 },
  'حمص': { lat: 34.7324, lng: 36.7136 },
  'حماة': { lat: 35.1318, lng: 36.7578 },
  'اللاذقية': { lat: 35.5317, lng: 35.7901 },
  'طرطوس': { lat: 34.8890, lng: 35.8866 },
  'إدلب': { lat: 35.9306, lng: 36.6339 },
  'درعا': { lat: 32.6184, lng: 36.1014 },
  'السويداء': { lat: 32.7087, lng: 36.5657 },
  'القنيطرة': { lat: 33.1269, lng: 35.8254 },
  'دير الزور': { lat: 35.3353, lng: 40.1408 },
  'الحسكة': { lat: 36.5023, lng: 40.7410 },
  'الرقة': { lat: 35.9520, lng: 39.0084 }
};

export const CAR_MAKES = ['Kia', 'Hyundai', 'Toyota', 'Mazda', 'Nissan', 'Mercedes', 'BMW', 'Audi', 'Chevrolet', 'Ford', 'Peugeot', 'Chery', 'BYD', 'Saba'];
export const ELECTRONICS_BRANDS = ['Samsung', 'Apple', 'Xiaomi', 'Huawei', 'Infinix', 'Realme', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'Asus'];
export const APPLIANCE_TYPES = ['ثلاجة', 'غسالة', 'ميكروويف', 'مكيف', 'فرن', 'غسالة صحون', 'دفاية', 'مكنسة كهربائية', 'شاشة'];
export const YEARS = Array.from({length: 40}, (_, i) => new Date().getFullYear() - i);

// Helper to add 'Misc' to all categories
const addMisc = (subs: any[]) => {
    return [...subs, { id: 'misc', name: 'متنوعات', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80' }];
};

// UPDATED CATEGORY LIST WITH REALISTIC IMAGES
export const CATEGORIES: Category[] = [
  {
    id: 'vehicles',
    name: 'مركبات',
    icon: 'CarFront',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 86500,
    subCategories: addMisc([
      { id: 'tourist', name: 'مركبات سياحية', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80' },
      { id: 'motorcycles', name: 'دراجات نارية', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=300&q=80' },
      { id: 'electric-bikes', name: 'دراجات كهربائية', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=300&q=80' },
      { id: 'transport', name: 'مركبات نقل', image: 'https://images.unsplash.com/photo-1506469717960-433cebe3f181?auto=format&fit=crop&w=300&q=80' },
      { id: 'heavy', name: 'مركبات ثقيلة', image: 'https://images.unsplash.com/photo-1586022718302-6033488798cb?auto=format&fit=crop&w=300&q=80' },
      { id: 'electric', name: 'سيارات كهربائية', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=300&q=80' },
      { id: 'parts', name: 'قطع غيار', image: 'https://images.unsplash.com/photo-1486262715619-01b8c2c97691?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'real-estate',
    name: 'عقارات',
    icon: 'Home', 
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 42100,
    subCategories: addMisc([
      { id: 'residential-rent', name: 'سكنية: إيجار', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=300&q=80' },
      { id: 'residential-sale', name: 'سكنية: تمليك', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&q=80' },
      { id: 'commercial-rent', name: 'تجارية: إيجار', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80' },
      { id: 'commercial-sale', name: 'تجارية: تمليك', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80' },
      { id: 'industrial-rent', name: 'صناعية: إيجار', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=300&q=80' },
      { id: 'industrial-sale', name: 'صناعية: تمليك', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80' },
      { id: 'agricultural-rent', name: 'زراعية: إيجار', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=300&q=80' },
      { id: 'agricultural-sale', name: 'زراعية: تمليك', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'sports',
    name: 'أدوات رياضية',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 3200,
    subCategories: addMisc([
        { id: 'gym-equipment', name: 'معدات جيم ولياقة', image: 'https://images.unsplash.com/photo-1540497077202-7c8a33801524?auto=format&fit=crop&w=300&q=80' },
        { id: 'bicycles', name: 'دراجات هوائية', image: 'https://images.unsplash.com/photo-1485965120184-e224f723d621?auto=format&fit=crop&w=300&q=80' },
        { id: 'camping', name: 'تخييم ورحلات', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=300&q=80' },
        { id: 'sports-clothing', name: 'ملابس وأحذية رياضية', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=300&q=80' },
        { id: 'balls-rackets', name: 'ألعاب كرة ومضارب', image: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?auto=format&fit=crop&w=300&q=80' },
        { id: 'supplements', name: 'مكملات غذائية', image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=300&q=80' },
        { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=300&q=80' }
    ])
  },
  {
    id: 'furniture',
    name: 'أثاث',
    icon: 'Armchair',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 18400,
    subCategories: addMisc([
      { id: 'home-furniture', name: 'مفروشات منزلية', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=300&q=80' },
      { id: 'home-tools', name: 'أدوات منزلية', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&q=80' },
      { id: 'office-furniture', name: 'مفروشات مكتبية', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=300&q=80' },
      { id: 'office-tools', name: 'أدوات مكتبية', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300&q=80' },
      { id: 'shop-furniture', name: 'مفروشات محلات ومطاعم', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=300&q=80' },
      { id: 'shop-tools', name: 'أدوات محلات ومطاعم', image: 'https://images.unsplash.com/photo-1472851294608-415522f9631f?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'electronics',
    name: 'إلكترونيات',
    icon: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 25300,
    subCategories: addMisc([
      { id: 'mobiles', name: 'جوالات، محمول', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300&q=80' },
      { id: 'computers', name: 'حاسوب، كمبيوتر', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80' },
      { id: 'gaming', name: 'ألعاب إلكترونية', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80' },
      { id: 'cctv', name: 'أجهزة المراقبة CCTV', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3d63?auto=format&fit=crop&w=300&q=80' },
      { id: 'audio-video', name: 'أجهزة صوتية ومرئية', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&q=80' },
      { id: 'misc', name: 'متنوعات', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1498049381960-da98d7ec8361?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'fashion',
    name: 'أزياء وملابس',
    icon: 'Shirt',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 15600,
    subCategories: addMisc([
      { id: 'men', name: 'رجالي', image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=300&q=80' },
      { id: 'women', name: 'نسائي', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=80' },
      { id: 'kids', name: 'ولادي', image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7e70?auto=format&fit=crop&w=300&q=80' },
      { id: 'shoes', name: 'أحذية', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80' },
      { id: 'accessories', name: 'إكسسوارات', image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&w=300&q=80' },
      { id: 'rent-wedding', name: 'للايجار (فساتين زفاف وسهرة)', image: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'kids',
    name: 'عالم الأطفال',
    icon: 'Baby',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 8900,
    subCategories: addMisc([
      { id: 'toys', name: 'ألعاب أطفال', image: 'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?auto=format&fit=crop&w=300&q=80' },
      { id: 'clothing', name: 'ملابس أطفال', image: 'https://images.unsplash.com/photo-1519278409-1f56fdda7e70?auto=format&fit=crop&w=300&q=80' },
      { id: 'furniture', name: 'أثاث أطفال', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=300&q=80' },
      { id: 'strollers', name: 'عربات ومعدات', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'machines',
    name: 'آلات ومعدات',
    icon: 'Factory',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 5400,
    subCategories: addMisc([
      { id: 'industrial', name: 'آلات ومعدات صناعية', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=300&q=80' },
      { id: 'agricultural', name: 'آلات ومعدات زراعية', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=300&q=80' },
      { id: 'construction', name: 'آلات ومعدات إنشائية', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80' },
      { id: 'medical', name: 'آلات ومعدات طبية', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b1e6?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'jobs',
    name: 'فرص عمل و مهن',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 1200,
    subCategories: addMisc([
      { id: 'vacancies', name: 'وظائف شاغرة', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80' },
      { id: 'job-seekers', name: 'بحث عن وظيفة', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=300&q=80' },
      { id: 'professions-wanted', name: 'مهن مطلوبة', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=300&q=80' },
      { id: 'professions-offered', name: 'مهن معروضة', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=300&q=80' },
      { id: 'all', name: 'عرض الكل', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300&q=80' },
    ])
  },
  {
    id: 'services',
    name: 'خدمات',
    icon: 'Wrench', 
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    adCount: 8700,
    subCategories: addMisc([
      { id: 'hajj-umrah', name: 'حج وعمرة', image: 'https://images.unsplash.com/photo-1565552684305-7e8d789a79a9?auto=format&fit=crop&w=300&q=80' },
      { id: 'transport', name: 'نقل', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80' },
      { id: 'teaching', name: 'تعليم', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=300&q=80' },
      { id: 'tourism', name: 'سياحة وسفر', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=300&q=80' },
      { id: 'consultations', name: 'استشارات', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80' },
      { id: 'entertainment', name: 'ترفيه ومناسبات', image: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=300&q=80' },
    ])
  }
];

export const MOCK_REVIEWS: Review[] = [
    { id: 'r1', reviewerId: 'u100', reviewerName: 'محمد العلي', targetUserId: 'user1', rating: 5, comment: 'تعامل راقي ومصداقية عالية.', date: '2024-03-10' },
    { id: 'r2', reviewerId: 'u101', reviewerName: 'سارة', targetUserId: 'user1', rating: 4, comment: 'المنتج جيد لكن التوصيل تأخر قليلاً.', date: '2024-03-08' },
    { id: 'r3', reviewerId: 'u102', reviewerName: 'عمر', targetUserId: 'user2', rating: 5, comment: 'أفضل أسعار في السوق!', date: '2024-02-28' },
];

export const MOCK_USERS: User[] = [
    { 
      id: 'user1', 
      name: 'أحمد الحلبي', 
      phone: '0912345678', 
      joinDate: '2022-05-01', 
      isVerified: true, 
      bio: 'تاجر سيارات معروف.', 
      role: 'Seller', 
      kycStatus: 'Verified',
      level: 'Diamond',
      accountStatus: 'Active',
      violationCount: 0,
      adsPostedCount: 45,
      lastActive: '2024-03-15T10:30:00Z',
      activityLogs: [
        { id: 'l1', action: 'Post Ad', details: 'Added new car ad', timestamp: '2024-03-15T10:00:00Z' },
        { id: 'l2', action: 'Login', details: 'Successful login', timestamp: '2024-03-15T09:45:00Z' },
      ],
      reviews: MOCK_REVIEWS.filter(r => r.targetUserId === 'user1')
    },
    { 
      id: 'user2', 
      name: 'مكتب الشام', 
      phone: '0923456789', 
      joinDate: '2023-02-15', 
      isVerified: true, 
      bio: 'عقارات موثقة.', 
      role: 'Seller', 
      kycStatus: 'Verified',
      level: 'Gold',
      accountStatus: 'Active',
      violationCount: 1,
      adsPostedCount: 12,
      lastActive: '2024-03-14T14:20:00Z',
      reviews: MOCK_REVIEWS.filter(r => r.targetUserId === 'user2')
    },
    { 
      id: 'admin', 
      name: 'إدارة الوسيط', 
      phone: '0999999999', 
      joinDate: '2023-01-01', 
      isVerified: true, 
      isAdmin: true, 
      role: 'Admin', 
      kycStatus: 'Verified',
      level: 'Diamond',
      accountStatus: 'Active',
      violationCount: 0
    },
    { 
      id: 'user3', 
      name: 'مستخدم جديد', 
      phone: '0988776655', 
      joinDate: '2024-03-12', 
      isVerified: false, 
      role: 'User', 
      kycStatus: 'Pending', 
      level: 'Normal',
      accountStatus: 'Active',
      violationCount: 0,
      adsPostedCount: 1,
      lastActive: '2024-03-12T09:00:00Z'
    },
    {
      id: 'user4',
      name: 'سامر المخالف',
      phone: '0911122233',
      joinDate: '2024-01-01',
      isVerified: false,
      role: 'User',
      kycStatus: 'Rejected',
      level: 'Normal',
      accountStatus: 'Banned',
      violationCount: 5,
      adsPostedCount: 0,
      lastActive: '2024-02-20T10:00:00Z',
      internalNotes: 'قام بنشر إعلانات وهمية متكررة.',
      activityLogs: [
         { id: 'l3', action: 'Violation', details: 'Posted spam ad', timestamp: '2024-02-20T09:55:00Z' }
      ]
    }
];

// ... (rest of the file remains unchanged)
export const MOCK_EMPLOYEES: Employee[] = [
  { 
    id: 'emp1', name: 'ماهر الأسد', role: 'Manager', department: 'الإدارة العليا', salary: 2500000, joinDate: '2022-01-15', status: 'Active', 
    email: 'maher@waseet.sy', phone: '0911111111', leaveBalance: 21,
    attendance: [{date: '2024-03-10', status: 'Present', checkIn: '08:55', checkOut: '17:00'}],
    penalties: [], bonuses: []
  },
  { 
    id: 'emp2', name: 'سارة المقداد', role: 'Moderator', department: 'مراقبة المحتوى', salary: 800000, joinDate: '2023-03-10', status: 'Active',
    email: 'sara@waseet.sy', phone: '0922222222', leaveBalance: 14,
    attendance: [{date: '2024-03-10', status: 'Late', checkIn: '09:30', checkOut: '17:00'}],
    penalties: [{id: 'p1', date: '2024-03-01', amount: 5000, reason: 'تأخر متكرر'}], bonuses: []
  },
  { 
    id: 'emp3', name: 'عمر الصالح', role: 'Support', department: 'خدمة العملاء', salary: 650000, joinDate: '2023-06-20', status: 'On Leave',
    email: 'omar@waseet.sy', phone: '0933333333', leaveBalance: 10,
    attendance: [{date: '2024-03-10', status: 'Leave'}],
    penalties: [], bonuses: []
  },
  { 
    id: 'emp4', name: 'ليلى خليل', role: 'Developer', department: 'التقنية', salary: 1800000, joinDate: '2022-11-05', status: 'Active',
    email: 'laila@waseet.sy', phone: '0944444444', leaveBalance: 25,
    attendance: [{date: '2024-03-10', status: 'Present', checkIn: '09:00', checkOut: '18:00'}],
    penalties: [], bonuses: [{id: 'b1', date: '2024-02-28', amount: 50000, reason: 'إنجاز المشروع قبل الموعد'}]
  },
];

export const MOCK_BANK_ACCOUNTS: BankAccount[] = [
  { id: 'ba1', holderName: 'شركة الوسيط للتجارة', bankName: 'بنك البركة', accountNumber: '123-456-789', iban: 'SY98 0012 3456 7890 1234', swift: 'BARASYDA', type: 'Company', currency: 'SYP', balance: 150000000, isDefault: true },
  { id: 'ba2', holderName: 'شركة الوسيط - دولي', bankName: 'بنك بيمو', accountNumber: '987-654-321', iban: 'SY98 0022 9876 5432 1098', swift: 'BBSYDA', type: 'Company', currency: 'USD', balance: 50000 },
];

export const MOCK_LEDGER: GeneralLedgerEntry[] = [
    { id: 'gl1', date: '2024-03-01', description: 'إيرادات إعلانات - شركة سيريتل', debit: 500000, credit: 0, account: 'Revenue' },
    { id: 'gl2', date: '2024-03-05', description: 'دفع رواتب الموظفين', debit: 0, credit: 5750000, account: 'Payroll Expense' },
];

export const MOCK_PAYROLLS: Payroll[] = [
  { id: 'pay1', employeeId: 'emp1', month: '2024-02', baseSalary: 2500000, bonuses: 500000, deductions: 0, netSalary: 3000000, status: 'Paid', paymentDate: '2024-02-28' },
  { id: 'pay2', employeeId: 'emp2', month: '2024-02', baseSalary: 800000, bonuses: 0, deductions: 5000, netSalary: 795000, status: 'Paid', paymentDate: '2024-02-28' },
];

export const MOCK_LEAVE_REQUESTS: LeaveRequest[] = [
  { id: 'lr1', employeeId: 'emp3', type: 'Annual', startDate: '2024-03-10', endDate: '2024-03-15', days: 5, status: 'Approved', reason: 'ظروف عائلية' },
  { id: 'lr2', employeeId: 'emp2', type: 'Sick', startDate: '2024-03-12', endDate: '2024-03-12', days: 1, status: 'Pending', reason: 'مراجعة طبيب أسنان' },
];

export const MOCK_JOB_APPLICATIONS: JobApplication[] = [
    { id: 'job1', position: 'Developer', candidateName: 'فادي نجار', email: 'fadi@gmail.com', phone: '0955123456', status: 'New', appliedDate: '2024-03-15', cvUrl: '#' },
    { id: 'job2', position: 'Sales', candidateName: 'سماح علي', email: 'samah@gmail.com', phone: '0944654321', status: 'Interview', appliedDate: '2024-03-14', cvUrl: '#' },
];

export const MOCK_INVOICES: Invoice[] = [
    { id: 'inv001', recipient: 'شركة سيريتل', amount: 500000, date: '2024-03-01', dueDate: '2024-03-15', status: 'Paid', type: 'Ad' },
    { id: 'inv002', recipient: 'مكتب الحلبي', amount: 25000, date: '2024-03-10', dueDate: '2024-03-20', status: 'Unpaid', type: 'Service' },
];

export const MOCK_ADS: Ad[] = [
  {
    id: '1',
    title: 'كيا ريو 2011 بحالة الوكالة',
    description: 'سيارة كيا ريو موديل 2011، محرك 1400cc، خالية من الداخل والخارج.',
    price: 85000000,
    currency: 'ل.س',
    categoryId: 'vehicles',
    subCategoryId: 'sedan',
    location: 'دمشق',
    images: ['https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    createdAt: '2023-10-25T10:00:00Z',
    isFeatured: true,
    ownerName: 'أحمد الحلبي',
    ownerId: 'user1',
    ownerPhone: '0912345678',
    status: 'approved',
    views: 1250,
    trustScore: 92,
    attributes: { make: 'Kia', year: 2011, transmission: 'automatic', condition: 'used' }
  },
  {
    id: '2',
    title: 'غسالة ال جي 7 كيلو',
    description: 'غسالة LG نظيفة جداً.',
    price: 4500000,
    currency: 'ل.س',
    categoryId: 'electronics',
    subCategoryId: 'home-appliances',
    location: 'اللاذقية',
    images: ['https://images.unsplash.com/photo-1626806775351-538af440617c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'],
    createdAt: '2023-10-22T18:45:00Z',
    ownerName: 'أم يزن',
    ownerId: 'user4',
    ownerPhone: '0945678901',
    status: 'pending',
    views: 120,
    trustScore: 45,
    moderationFlag: 'Scam Suspected',
    attributes: { brand: 'LG', condition: 'used' }
  }
];

export const MOCK_CORPORATE_ADS: CorporateAd[] = [
  {
    id: 'h1',
    companyName: 'Samsung Syria',
    title: 'أحدث هواتف Galaxy S24 Ultra متوفرة الآن',
    mediaUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '#',
    zone: 'hero-top',
    views: 1200,
    clicks: 45,
    status: 'active',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    budget: 500000
  },
  {
    id: 'h2',
    companyName: 'Syriatel',
    title: 'عروض باقات 5G الجديدة - سرعة خيالية',
    mediaUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '#',
    zone: 'hero-top',
    views: 980,
    clicks: 30,
    status: 'active',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    budget: 300000
  },
  {
    id: 's1',
    companyName: 'مطعم البيت الشامي',
    title: 'أطيب المأكولات الشامية الأصيلة',
    mediaUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    linkUrl: '#',
    zone: 'sidebar',
    views: 500,
    clicks: 10,
    status: 'active',
    startDate: '2023-01-01',
    endDate: '2024-12-31',
    budget: 100000
  }
];

export const MOCK_SELLERS: Seller[] = [
    { id: 'sel1', userId: 'user1', storeName: 'معرض الحلبي للسيارات', status: 'Active', rating: 4.8, revenue: 12000000, productsCount: 15, ownerName: 'أحمد الحلبي', joinedDate: '2022-05-01', commissionRate: 5 },
    { id: 'sel2', userId: 'user2', storeName: 'موبايلات الشام', status: 'Active', rating: 4.5, revenue: 5600000, productsCount: 42, ownerName: 'سامر المصري', joinedDate: '2023-02-15', commissionRate: 5 },
    { id: 'sel3', userId: 'user3', storeName: 'مفروشات النور', status: 'Pending', rating: 0, revenue: 0, productsCount: 5, ownerName: 'نور الدين', joinedDate: '2024-03-10', commissionRate: 5 },
];

export const MOCK_MODERATION_QUEUE: ModerationTicket[] = [
    { id: 'mod_001', adId: '2', reason: 'Suspected Scam (Price too low)', aiScore: 89, status: 'Pending', date: '2024-03-10', flagType: 'Scam' },
    { id: 'mod_002', adId: '1', reason: 'Duplicate Listing', aiScore: 45, status: 'Flagged', date: '2024-03-09', flagType: 'Duplicate' },
];

export const ANALYTICS_DATA = {
    visits: [450, 600, 750, 500, 800, 950, 1200], // Last 7 days
    revenue: [100000, 150000, 120000, 200000, 180000, 250000, 300000],
    ads: [10, 15, 12, 20, 18, 25, 30]
};

export const CORPORATE_PACKAGES: AdPackage[] = [
    {
        id: 'hero_pkg',
        name: 'بانر رئيسي (Hero)',
        type: 'Corporate',
        price: 0,
        pricePerDay: 50000,
        durationDays: 1,
        features: ['ظهور في أعلى الصفحة الرئيسية', 'أعلى معدل مشاهدة', 'دعم جميع الأجهزة'],
        description: 'الخيار الأمثل للشركات الكبرى لإطلاق المنتجات الجديدة.',
        dimensions: '1920x400 px',
        zone: 'hero-top'
    },
    {
        id: 'sidebar_pkg',
        name: 'إعلان جانبي (Sidebar)',
        type: 'Corporate',
        price: 0,
        pricePerDay: 25000,
        durationDays: 1,
        features: ['ظهور مستمر بجانب النتائج', 'تكلفة اقتصادية', 'استهداف دقيق'],
        description: 'خيار ممتاز لتعزيز العلامة التجارية باستمرار.',
        dimensions: '300x300 px',
        zone: 'sidebar'
    },
    {
        id: 'grid_pkg',
        name: 'شبكة العروض (Grid)',
        type: 'Corporate',
        price: 0,
        pricePerDay: 35000,
        durationDays: 1,
        features: ['تصميم جذاب ضمن شبكة العروض', 'نسبة نقر عالية', 'مناسب للعروض الخاصة'],
        description: 'مثالي للعروض الترويجية والخصومات الموسمية.',
        dimensions: '600x400 px',
        zone: 'featured-grid'
    }
];
