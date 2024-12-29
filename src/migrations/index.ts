import * as migration_20241229_121728_migration from './20241229_121728_migration';

export const migrations = [
  {
    up: migration_20241229_121728_migration.up,
    down: migration_20241229_121728_migration.down,
    name: '20241229_121728_migration'
  },
];
