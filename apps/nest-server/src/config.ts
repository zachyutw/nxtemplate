import { dotenvUtils } from '@myorg/common-utils';
enum ConfigEnv {
  NEST_APP_ENV = 'NEST_APP_ENV',
  NEST_APP_BASE_URL = 'NEST_APP_BASE_URL',
}

type KeyType = keyof typeof ConfigEnv;

const config = dotenvUtils.getConfigFromDotenv<KeyType>(ConfigEnv);

export default config;
