
export type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};


export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/#domains', label: 'Domains' },
  { 
    href: '#',
    label: 'Explore',
    children: [
      { href: '/machine-learning', label: 'Machine Learning' },
      { href: '/industrial-robotics', label: 'Industrial Robotics' },
      { href: '/healthmate', label: 'HealthMate' },
      { href: '/innovate', label: 'Innovate With Us' },
    ]
  },
  { href: '/about', label: 'About Us' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/praverse',
  linkedin: 'https://linkedin.com/company/praverse',
  github: 'https://github.com/praverse',
};
