// Common Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Course Related Types
export interface CourseItem {
  id: string;
  type: 'video' | 'document';
  title: string;
  isFree: boolean;
  icon: 'green' | 'gray';
}

export interface CourseSection {
  id: string;
  title: string;
  items: CourseItem[];
}

export interface CourseInstructor {
  name: string;
  image: string;
  education: string[];
  ieltsScore: string;
}

export interface CourseFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface LearningOutcome {
  text: string;
}

// Navigation Types
export interface NavigationItem {
  id: string;
  title: string;
  href?: string;
  dropdown?: NavigationItem[];
}

// Modal Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

// Form Types
export interface ContactFormData {
  mobileOrEmail: string;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
  isMockData?: boolean;
}

// Redux Types
export interface RootState {
  // Add your Redux state types here
  // This is a placeholder for Redux state types
  // Example: cart: CartState;
}

// Component Props Types
export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  image?: string;
  onClick?: () => void;
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

// Hook Types
export interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} 