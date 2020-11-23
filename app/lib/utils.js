export function getRunTimeDotEnv(key) {
  // server only
  if (typeof window === 'undefined') {
    return process.env[key];
  }

  return undefined;
}

export default null;
