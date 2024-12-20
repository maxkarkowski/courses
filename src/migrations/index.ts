import * as migration_20241216_094917 from './20241216_094917';
import * as migration_20241216_101457 from './20241216_101457';
import * as migration_20241220_122918 from './20241220_122918';
import * as migration_20241220_130812 from './20241220_130812';
import * as migration_20241220_133958 from './20241220_133958';
import * as migration_20241220_151850 from './20241220_151850';
import * as migration_20241220_152517 from './20241220_152517';
import * as migration_20241220_153608 from './20241220_153608';

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
    name: '20241220_133958',
  },
  {
    up: migration_20241220_151850.up,
    down: migration_20241220_151850.down,
    name: '20241220_151850',
  },
  {
    up: migration_20241220_152517.up,
    down: migration_20241220_152517.down,
    name: '20241220_152517',
  },
  {
    up: migration_20241220_153608.up,
    down: migration_20241220_153608.down,
    name: '20241220_153608'
  },
];
