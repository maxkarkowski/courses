import * as migration_20250311_081344_migration from './20250311_081344_migration';

export const migrations = [
  {
    up: migration_20250311_081344_migration.up,
    down: migration_20250311_081344_migration.down,
    name: '20250311_081344_migration'
  },
];
