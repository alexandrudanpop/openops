import { createBlock } from '@openops/blocks-framework';
import { BlockCategory } from '@openops/shared';
import { executeSqlStatement } from './lib/actions/execute-sql-statement';
import { runJob } from './lib/actions/run-job';
import { databricksAuth } from './lib/common/auth';

export const databricks = createBlock({
  displayName: 'Databricks',
  auth: databricksAuth,
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://static.openops.com/blocks/databricks.png',
  categories: [BlockCategory.DATA_SOURCES],
  authors: [],
  actions: [executeSqlStatement, runJob],
  triggers: [],
});
