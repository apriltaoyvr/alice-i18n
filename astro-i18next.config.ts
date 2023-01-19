/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'it'],
  namespaces: ['common'],
  defaultNamespace: 'common',
  i18nextServer: {
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  },
  i18nextClient: {
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  },
};
