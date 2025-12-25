
export interface SubCategory {
  id: string;
  name: string;
  image?: string;
  isHidden?: boolean;
  isDeleted?: boolean; // Soft delete
  order?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image?: string;
  adCount?: number;
  subCategories: SubCategory[];
  isHidden?: boolean;
  isDeleted?: boolean; // Soft delete
  order?: number;
  nameEn?: string; // Support for localization
}

export interface AdAttributes {
  make?: string;
  year?: number;
  km?: number;
  transmission?: 'manual' | 'automatic';
  rooms?: number;
  area?: number;
  furnished?: boolean;
  brand?: string;
  condition?: 'new' | 'used';
  applianceType?: string;
  hours?: number;
  power?: string;
}

// --- NOTIFICATION SYSTEM ---
export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  timestamp: string;
  link?: string; // Optional link to redirect user
}

// --- REVIEWS SYSTEM (NEW) ---
export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerAvatar?: string;
  targetUserId: string; // Seller ID
  rating: number; // 1 to 5
  comment: string;
  date: string;
}

// --- UPDATED USER TYPE FOR CUSTOMER MODULE ---
export type CustomerLevel = 'Normal' | 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
export type AccountStatus = 'Active' | 'Banned' | 'ShadowBanned' | 'Suspended';

export interface UserActivityLog {
  id: string;
  action: 'Login' | 'Post Ad' | 'Edit Ad' | 'Delete Ad' | 'Payment' | 'Violation';
  details: string;
  timestamp: string;
  ipAddress?: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string;
  avatar?: string;
  joinDate: string;
  isVerified: boolean;
  isAdmin?: boolean;
  isBanned?: boolean;
  bio?: string;
  walletBalance?: number;
  points?: number;
  role?: 'User' | 'Seller' | 'Moderator' | 'Admin';
  kycStatus?: 'Pending' | 'Verified' | 'Rejected';
  
  // Location Info
  governorate?: string;
  address?: string;

  // New Customer Module Fields (Optional to maintain backward compatibility)
  level?: CustomerLevel;
  accountStatus?: AccountStatus;
  violationCount?: number;
  adsPostedCount?: number;
  lastActive?: string;
  internalNotes?: string;
  activityLogs?: UserActivityLog[];
  
  // New: Reviews
  reviews?: Review[];
  
  // New: Super Admin Fields
  trustScore?: number;
  deviceFingerprint?: string;
  lastIp?: string;
}

// --- DASHBOARD EXTENDED TYPES ---

export interface Seller {
  id: string;
  userId: string;
  storeName: string;
  status: 'Active' | 'Pending' | 'Suspended';
  rating: number;
  revenue: number;
  productsCount: number;
  ownerName: string;
  joinedDate: string;
  commissionRate: number; // Percentage
}

export interface Transaction {
  id: string;
  user: string;
  amount: number;
  type: 'Deposit' | 'Withdrawal' | 'Purchase' | 'Fee' | 'AdSpend';
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
  referenceId?: string;
}

export interface ModerationTicket {
  id: string;
  adId: string;
  reason: string;
  aiScore: number; // 0-100 Fraud Score
  status: 'Pending' | 'Resolved' | 'Flagged';
  date: string;
  flagType: 'Spam' | 'Scam' | 'Inappropriate' | 'Duplicate';
}

export interface ContactMessage {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  message: string;
  subject?: string;       // New
  reply_content?: string; // New
  replied_at?: string;    // New
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

// --- HR SYSTEM TYPES ---

export interface AttendanceRecord {
  date: string;
  status: 'Present' | 'Absent' | 'Late' | 'Leave';
  checkIn?: string;
  checkOut?: string;
  workHours?: number;
}

export interface PenaltyRecord {
  id: string;
  date: string;
  amount: number;
  reason: string;
}

export interface BonusRecord {
  id: string;
  date: string;
  amount: number;
  reason: string;
}

export interface Contract {
  id: string;
  employeeId: string;
  type: 'Full-Time' | 'Part-Time' | 'Freelance';
  startDate: string;
  endDate?: string;
  baseSalary: number;
  terms: string;
  documentUrl?: string;
}

export interface Payroll {
  id: string;
  employeeId: string;
  month: string;
  baseSalary: number;
  bonuses: number;
  deductions: number;
  netSalary: number;
  status: 'Paid' | 'Pending';
  paymentDate?: string;
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  date: string;
  rating: number; // 1-5
  feedback: string;
  reviewer: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  type: 'Sick' | 'Annual' | 'Unpaid';
  startDate: string;
  endDate: string;
  days: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  reason: string;
}

export interface TrainingSession {
  id: string;
  title: string;
  date: string;
  duration: string;
  attendees: string[];
  status: 'Scheduled' | 'Completed';
}

export interface JobApplication {
  id: string;
  position: string;
  candidateName: string;
  email: string;
  phone: string;
  status: 'New' | 'Screening' | 'Interview' | 'Hired' | 'Rejected';
  appliedDate: string;
  cvUrl?: string;
  notes?: string;
}

export interface Employee {
  id: string;
  name: string;
  role: 'Manager' | 'Moderator' | 'Support' | 'Developer' | 'Accountant' | 'HR' | 'Sales';
  department: string;
  salary: number; // Base Salary
  joinDate: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  avatar?: string;
  email?: string;
  phone?: string;
  leaveBalance: number;
  attendance: AttendanceRecord[];
  penalties: PenaltyRecord[];
  bonuses: BonusRecord[];
  bankAccountId?: string;
  contractId?: string;
}

// --- FINANCIAL & BANKING TYPES ---

export interface BankAccount {
  id: string;
  holderName: string;
  bankName: string;
  accountNumber: string;
  iban: string;
  swift?: string;
  type: 'Company' | 'Employee' | 'Seller';
  employeeId?: string;
  currency: string;
  balance?: number;
  isDefault?: boolean;
}

export interface Invoice {
  id: string;
  recipient: string;
  amount: number;
  date: string;
  dueDate: string;
  status: 'Paid' | 'Unpaid' | 'Overdue';
  type: 'Ad' | 'Service' | 'Commission' | 'Tax';
}

export interface FinancialRecord {
  id: string;
  type: 'Income' | 'Expense';
  category: 'Ads' | 'Subscription' | 'Salary' | 'Server' | 'Marketing' | 'Tax' | 'Operations';
  amount: number;
  date: string;
  description: string;
  referenceId?: string; // Links to Invoice or Transaction
}

export interface TaxSettings {
  vatPercentage: number;
  commissionPercentage: number;
  featuredAdPrice: number;
  corporateTax: number;
}

export interface GeneralLedgerEntry {
  id: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  account: string; // e.g., "Cash", "Accounts Receivable"
}

export interface Order {
  id: string;
  customerName: string;
  items: string;
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: 'COD' | 'Visa' | 'Wallet';
  date: string;
  shippingAddress?: string;
}

export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  categoryId: string;
  subCategoryId?: string;
  location: string;
  images: string[];
  videoUrl?: string;
  createdAt: string;
  isFeatured?: boolean; // Used for Paid User Ads
  ownerId: string;
  ownerName: string;
  ownerPhone: string;
  attributes?: AdAttributes;
  status: 'pending' | 'approved' | 'rejected' | 'archived' | 'sold';
  views?: number;
  trustScore?: number; // AI Score 0-100
  moderationFlag?: string;
  inspection_result?: any; // New field for AI Inspection JSON
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
  adId?: string; 
  mediaUrl?: string; 
  mediaType?: 'image' | 'video' | 'audio'; // NEW: audio added
}

// --- CALLING SYSTEM TYPES ---
export interface CallSession {
  id: string;
  callerId: string;
  receiverId: string;
  type: 'audio' | 'video';
  status: 'ringing' | 'active' | 'ended' | 'rejected';
  createdAt: string;
}

export interface FilterState {
  categoryId: string | null;
  subCategoryId: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  location: string | null;
  searchTerm: string;
  minYear?: number;
  maxYear?: number;
  make?: string;
  minRooms?: number;
  furnished?: boolean | null;
  brand?: string;
  condition?: string;
  minArea?: number;
  maxArea?: number;
  applianceType?: string;
  
  // New: Geolocation sorting
  sortBy?: 'date' | 'price_asc' | 'price_desc' | 'distance';
  userLocation?: { lat: number; lng: number };
}

export type AdZone = 'hero-top' | 'sidebar' | 'native-grid' | 'horizontal-strip' | 'featured-grid';

export interface CorporateAd {
  id: string;
  companyName: string;
  title: string;
  mediaUrl: string;
  linkUrl: string;
  zone: AdZone;
  targetCategory?: string;
  views: number;
  clicks: number;
  ctr?: number;
  status: 'active' | 'paused' | 'ended' | 'pending';
  startDate: string;
  endDate: string;
  budget: number;
  spend?: number;
}

export interface AdPackage {
  id: string;
  name: string;
  type: 'User' | 'Corporate';
  price: number;
  durationDays: number;
  features: string[];
  // Optional fields for Corporate Dashboard UI
  description?: string;
  pricePerDay?: number;
  dimensions?: string;
  zone?: AdZone;
  isVip?: boolean;
}

// --- NEW FEATURES TYPES (ADDITIVE) ---

export interface FeatureFlags {
  enableEscrow: boolean;
  enableLiveAuction: boolean;
  enableBarter: boolean;
  enableAIInspection: boolean;
  enableVoiceChat: boolean;
  enableLiteMode: boolean;
  enableCommunities: boolean;
  enableProDashboard: boolean;
}

export interface EscrowTransaction {
  id: string;
  adId: string;
  buyerId: string;
  sellerId: string;
  amount: number;
  status: 'held' | 'released' | 'refunded' | 'disputed';
  createdAt: string;
  updatedAt: string;
}

export interface BarterOffer {
  id: string;
  targetAdId: string;
  offeredAdId: string;
  proposerId: string;
  cashDifference: number; // Positive means proposer pays extra, negative means receiver pays
  status: 'pending' | 'accepted' | 'rejected';
}

export interface LiveSession {
  id: string;
  adId: string;
  hostId: string;
  viewerCount: number;
  isActive: boolean;
  streamUrl?: string; // WebRTC or HLS URL
}

// --- SUPER ADMIN DASHBOARD TYPES ---

export interface AuditLogEntry {
  id: string;
  adminId: string;
  action: string;
  target: string;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface AdminStream {
  id: string;
  username: string;
  viewers: number;
  duration: string;
  status: 'live' | 'flagged' | 'banned';
  preview: string;
  reportCount: number;
}

export interface AIConfig {
  filterSensitivity: number; // 0-100
  bannedWords: string[];
  systemPrompt: string;
  autoBanThreshold: number;
}

export interface MarketingCampaign {
  id: string;
  name: string;
  targetSegment: string;
  targetLocation: string;
  status: 'Active' | 'Scheduled' | 'Ended';
  reach: number;
  budget: number;
}
