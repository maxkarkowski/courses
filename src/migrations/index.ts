import * as migration_20241229_121728_migration from './20241229_121728_migration';
import * as migration_20250107_111311_migration from './20250107_111311_migration';

export const migrations = [
  {
    up: migration_20241229_121728_migration.up,
    down: migration_20241229_121728_migration.down,
    name: '20241229_121728_migration',
  },
  {
    up: migration_20250107_111311_migration.up,
    down: migration_20250107_111311_migration.down,
    name: '20250107_111311_migration'
  },
];
