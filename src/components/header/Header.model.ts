export interface HeaderProps {
  menuItems: string[];
  appName: string;
  buttonLabel: string;
  navigateFn: (value: string) => void | undefined;
  buttonFn?: () => void | undefined;
}
