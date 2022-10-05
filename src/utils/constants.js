export const iconTypes = {
  order: 'order',
  account: 'account',
  server: 'server',
  monitoring: 'monitoring',
  domains: 'domains',
  ssl: 'ssl',
  shop: 'shop',
  seo: 'seo',
  support: 'support',
  idea: 'idea'
};

const ghPages = '/test-work';
export const appPaths = {
  order: `${ghPages}/`,
  account: `${ghPages}/account`,
  server: `${ghPages}/server`,
  monitoring: `/${ghPages}monitoring`,
  domains: `${ghPages}/domains`,
  ssl: `${ghPages}/ssl`,
  shop: `${ghPages}/shop`,
  seo: `${ghPages}/seo`,
  support: `${ghPages}/support`,
  idea: `${ghPages}/idea`
};

export const searchOptions = {
  nvme: 'Быстрые',
  turbo: 'Турбо',
  kit: 'Конфигуратор',
  hdd: 'Большой объем'
};

export const dropMenuTypes = {
  vpsSearch: 'search',
  distribution: 'distribution',
  software: 'software'
};

export const ispConvert = ['vps_isp6_lite', 'vps_isp6_pro', 'vps_isp6_host'];

export const ispConverter = (name) => {
  if (ispConvert.includes(name)) {
    return 'isp';
  }
  return name;
};
