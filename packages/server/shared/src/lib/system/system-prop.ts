export type SystemProp = AppSystemProp | SharedSystemProp | WorkerSystemProps;

export enum AppSystemProp {
  API_KEY = 'API_KEY',
  API_RATE_LIMIT_AUTHN_ENABLED = 'API_RATE_LIMIT_AUTHN_ENABLED',
  API_RATE_LIMIT_AUTHN_MAX = 'API_RATE_LIMIT_AUTHN_MAX',
  API_RATE_LIMIT_AUTHN_WINDOW = 'API_RATE_LIMIT_AUTHN_WINDOW',
  AZURE_OPENAI_ENDPOINT = 'AZURE_OPENAI_ENDPOINT',
  AZURE_OPENAI_API_VERSION = 'AZURE_OPENAI_API_VERSION',
  CLIENT_REAL_IP_HEADER = 'CLIENT_REAL_IP_HEADER',
  CLOUD_AUTH_ENABLED = 'CLOUD_AUTH_ENABLED',
  CONFIG_PATH = 'CONFIG_PATH',
  COPILOT_INSTANCE_TYPE = 'COPILOT_INSTANCE_TYPE',
  EXECUTION_DATA_RETENTION_DAYS = 'EXECUTION_DATA_RETENTION_DAYS',
  DB_TYPE = 'DB_TYPE',
  ENCRYPTION_KEY = 'ENCRYPTION_KEY',
  LICENSE_KEY = 'LICENSE_KEY',
  OPENAI_API_KEY = 'OPENAI_API_KEY',
  RAPID_API_KEY = 'RAPID_API_KEY',
  OPENAI_API_BASE_URL = 'OPENAI_API_BASE_URL',
  POSTGRES_URL = 'POSTGRES_URL',
  POSTGRES_DATABASE = 'POSTGRES_DATABASE',
  POSTGRES_HOST = 'POSTGRES_HOST',
  OPENOPS_TABLES_DB_HOST = 'OPENOPS_TABLES_DB_HOST',
  POSTGRES_PASSWORD = 'POSTGRES_PASSWORD',
  POSTGRES_PORT = 'POSTGRES_PORT',
  POSTGRES_SSL_CA = 'POSTGRES_SSL_CA',
  POSTGRES_USERNAME = 'POSTGRES_USERNAME',
  POSTGRES_USE_SSL = 'POSTGRES_USE_SSL',
  QUEUE_MODE = 'QUEUE_MODE',
  QUEUE_UI_ENABLED = 'QUEUE_UI_ENABLED',
  QUEUE_UI_PASSWORD = 'QUEUE_UI_PASSWORD',
  QUEUE_UI_USERNAME = 'QUEUE_UI_USERNAME',
  REDIS_DB = 'REDIS_DB',
  REDIS_HOST = 'REDIS_HOST',
  REDIS_PASSWORD = 'REDIS_PASSWORD',
  REDIS_PORT = 'REDIS_PORT',
  REDIS_URL = 'REDIS_URL',
  REDIS_USER = 'REDIS_USER',
  REDIS_USE_SSL = 'REDIS_USE_SSL',
  SMTP_HOST = 'SMTP_HOST',
  SMTP_PASSWORD = 'SMTP_PASSWORD',
  SMTP_PORT = 'SMTP_PORT',
  SMTP_USERNAME = 'SMTP_USERNAME',
  SMTP_SENDER_NAME = 'SMTP_SENDER_NAME',
  SMTP_SENDER_EMAIL = 'SMTP_SENDER_EMAIL',
  SMTP_USE_SSL = 'SMTP_USE_SSL',
  JWT_SECRET = 'JWT_SECRET',
  TEMPLATES_SOURCE_URL = 'TEMPLATES_SOURCE_URL',
  TRIGGER_DEFAULT_POLL_INTERVAL = 'TRIGGER_DEFAULT_POLL_INTERVAL',
  WEBHOOK_TIMEOUT_SECONDS = 'WEBHOOK_TIMEOUT_SECONDS',
  BLOCKS_SYNC_MODE = 'BLOCKS_SYNC_MODE',
  TRIGGER_FAILURES_THRESHOLD = 'TRIGGER_FAILURES_THRESHOLD',
  MAX_CONCURRENT_JOBS_PER_PROJECT = 'MAX_CONCURRENT_JOBS_PER_PROJECT',
  PROJECT_RATE_LIMITER_ENABLED = 'PROJECT_RATE_LIMITER_ENABLED',
  JWT_TOKEN_LIFETIME_HOURS = 'JWT_TOKEN_LIFETIME_HOURS',
  TABLES_TOKEN_LIFETIME_MINUTES = 'TABLES_TOKEN_LIFETIME_MINUTES',

  // ENTERPRISE ONLY
  APPSUMO_TOKEN = 'APPSUMO_TOKEN',
  FIREBASE_ADMIN_CREDENTIALS = 'FIREBASE_ADMIN_CREDENTIALS',
  FIREBASE_HASH_PARAMETERS = 'FIREBASE_HASH_PARAMETERS',
  STRIPE_SECRET_KEY = 'STRIPE_SECRET_KEY',
  STRIPE_WEBHOOK_SECRET = 'STRIPE_WEBHOOK_SECRET',

  // CLOUD_ONLY
  CLOUD_ORGANIZATION_ID = 'CLOUD_ORGANIZATION_ID',
  CLOUDFLARE_AUTH_EMAIL = 'CLOUDFLARE_AUTH_EMAIL',
  CLOUDFLARE_ZONE_ID = 'CLOUDFLARE_ZONE_ID',
  CLOUDFLARE_API_KEY = 'CLOUDFLARE_API_KEY',
  EDITION = 'EDITION',
  CLOUD_CONNECTION_PAGE_ENABLED = 'CLOUD_CONNECTION_PAGE_ENABLED',

  OPENOPS_ADMIN_EMAIL = 'OPENOPS_ADMIN_EMAIL',
  OPENOPS_ADMIN_PASSWORD = 'OPENOPS_ADMIN_PASSWORD',

  OPENOPS_TABLES_DATABASE_NAME = 'OPENOPS_TABLES_DATABASE_NAME',
  OPENOPS_TABLES_PUBLIC_URL = 'OPENOPS_TABLES_PUBLIC_URL',
  OPENOPS_TABLES_API_URL = 'OPENOPS_TABLES_API_URL',
  MAX_CONCURRENT_TABLES_REQUESTS = 'MAX_CONCURRENT_TABLES_REQUESTS',

  ANALYTICS_PRIVATE_URL = 'ANALYTICS_PRIVATE_URL',
  ANALYTICS_PUBLIC_URL = 'ANALYTICS_PUBLIC_URL',
  ANALYTICS_ADMIN_PASSWORD = 'ANALYTICS_ADMIN_PASSWORD',
  ALLOWED_DOMAINS = 'ALLOWED_DOMAINS',
  AWS_PRICING_ACCESS_KEY_ID = 'AWS_PRICING_ACCESS_KEY_ID',
  AWS_PRICING_SECRET_ACCESS_KEY = 'AWS_PRICING_SECRET_ACCESS_KEY',
  SLACK_APP_SIGNING_SECRET = 'SLACK_APP_SIGNING_SECRET',

  DARK_THEME_ENABLED = 'DARK_THEME_ENABLED',
  SHOW_DEMO_HOME_PAGE = 'SHOW_DEMO_HOME_PAGE',

  FRONTEGG_URL = 'FRONTEGG_URL',
  FRONTEGG_CLIENT_ID = 'FRONTEGG_CLIENT_ID',
  FRONTEGG_API_KEY = 'FRONTEGG_API_KEY',
  FRONTEGG_APP_ID = 'FRONTEGG_APP_ID',

  ENGINE_URL = 'ENGINE_URL',
  TELEMETRY_COLLECTOR_URL = 'TELEMETRY_COLLECTOR_URL',

  AZURE_API_VERSION = 'AZURE_API_VERSION',
}

export enum SharedSystemProp {
  LOG_LEVEL = 'LOG_LEVEL',
  LOG_PRETTY = 'LOG_PRETTY',
  ENVIRONMENT = 'ENVIRONMENT',
  CONTAINER_TYPE = 'CONTAINER_TYPE',
  TRIGGER_TIMEOUT_SECONDS = 'TRIGGER_TIMEOUT_SECONDS',
  FLOW_TIMEOUT_SECONDS = 'FLOW_TIMEOUT_SECONDS',
  APP_WEBHOOK_SECRETS = 'APP_WEBHOOK_SECRETS',

  FRONTEND_URL = 'FRONTEND_URL',

  // These are shared as the app is using the engine as a dependency for now.
  CACHE_PATH = 'CACHE_PATH',
  PACKAGE_ARCHIVE_PATH = 'PACKAGE_ARCHIVE_PATH',
  BLOCKS_SOURCE = 'BLOCKS_SOURCE',
  ENRICH_ERROR_CONTEXT = 'ENRICH_ERROR_CONTEXT',

  // Cloud Only & Enterprise Only
  SENTRY_DSN = 'SENTRY_DSN',

  LOGZIO_TOKEN = 'LOGZIO_TOKEN',
  LOGZIO_METRICS_TOKEN = 'LOGZIO_METRICS_TOKEN',
  ENVIRONMENT_NAME = 'ENVIRONMENT_NAME',
  COMPONENT = 'COMPONENT',
  EXECUTION_MODE = 'EXECUTION_MODE',
  VERSION = 'VERSION',
  OPENOPS_TABLES_VERSION = 'OPENOPS_TABLES_VERSION',
  ANALYTICS_VERSION = 'ANALYTICS_VERSION',
  ENABLE_HOST_SESSION = 'ENABLE_HOST_SESSION',

  INTERNAL_OAUTH_PROXY_URL = 'INTERNAL_OAUTH_PROXY_URL',
  INTERNAL_BACKEND_PUBLIC_URL = 'INTERNAL_BACKEND_PUBLIC_URL',
}

export enum WorkerSystemProps {
  FLOW_WORKER_CONCURRENCY = 'FLOW_WORKER_CONCURRENCY',
  SCHEDULED_WORKER_CONCURRENCY = 'SCHEDULED_WORKER_CONCURRENCY',
  SCHEDULED_POLLING_COUNT = 'SCHEDULED_POLLING_COUNT',

  // TODO: This is currently undocumented and used for testing purposes. Please document or remove as necessary.
  POLLING_POOL_SIZE = 'POLLING_POOL_SIZE',
  WORKER_TOKEN = 'WORKER_TOKEN',
}
