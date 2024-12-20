import * as migration_20241220_162056 from './20241220_162056';
import * as migration_20241220_162251 from './20241220_162251';

export const migrations = [
  {
    up: migration_20241220_162056.up,
    down: migration_20241220_162056.down,
    name: '20241220_162056',
  },
  {
    up: migration_20241220_162251.up,
    down: migration_20241220_162251.down,
    name: '20241220_162251'
  },
];
