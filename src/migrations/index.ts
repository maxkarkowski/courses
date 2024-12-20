import * as migration_20241216_094917 from './20241216_094917';
import * as migration_20241216_101457 from './20241216_101457';
import * as migration_20241220_122918 from './20241220_122918';
import * as migration_20241220_130812 from './20241220_130812';
import * as migration_20241220_133958 from './20241220_133958';

export const migrations = [
  {
    up: migration_20241216_094917.up,
    down: migration_20241216_094917.down,
    name: '20241216_094917',
  },
  {
    up: migration_20241216_101457.up,
    down: migration_20241216_101457.down,
    name: '20241216_101457',
  },
  {
    up: migration_20241220_122918.up,
    down: migration_20241220_122918.down,
    name: '20241220_122918',
  },
  {
    up: migration_20241220_130812.up,
    down: migration_20241220_130812.down,
    name: '20241220_130812',
  },
  {
    up: migration_20241220_133958.up,
    down: migration_20241220_133958.down,
    name: '20241220_133958'
  },
];
