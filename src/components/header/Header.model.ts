export interface HeaderProps {
  menuItems: string[];
  appName: string;
  buttonLabel: string;
  navigateFn?: () => void;
  buttonFn?: () => void;
}
