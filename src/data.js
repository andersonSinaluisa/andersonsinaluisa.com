import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text:'Acerca de',
      href: '#features'
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Contactar', href: 'mailto:andersonsinaluisa@gmail.com' }
  ],
};
  
export const footerData = {
  links:[],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Politicas de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/andersonSinaluisa' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/anderson-s-37715b165/' },
    { ariaLabel: 'Dev.to', icon: 'la:dev', href: 'https://dev.to/andersonsinaluisa' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Anderson Sinaluisa. Todos los derechos reservados.
  `,
};
