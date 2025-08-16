// Type definitions for common components

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}
