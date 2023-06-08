function getConfigFromDotenv<T extends string>(
  obj: {
    [s: string]: string;
  },
  prefix?: string
): { [Property in T]: string } {
  return Object.fromEntries(
    Object.keys(obj).map((configKey) => [
      prefix ? prefix + configKey : configKey,
      process.env[configKey] || '',
    ])
  ) as { [Property in T]: string };
}

const dotenvUtils = {
  getConfigFromDotenv,
};

export default dotenvUtils;
