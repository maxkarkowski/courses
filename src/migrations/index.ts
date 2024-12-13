import * as migration_20241213_155054 from './20241213_155054';
import * as migration_20241213_164400 from './20241213_164400';

export const migrations = [
  {
    up: migration_20241213_155054.up,
    down: migration_20241213_155054.down,
    name: '20241213_155054',
  },
  {
    up: migration_20241213_164400.up,
    down: migration_20241213_164400.down,
    name: '20241213_164400'
  },
];
