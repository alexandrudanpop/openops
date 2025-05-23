import { googleCloud } from '../src/index';

describe('block declaration tests', () => {
  test('should return block with correct actions', () => {
    expect(Object.keys(googleCloud.actions()).length).toBe(3);
    expect(googleCloud.actions()).toMatchObject({
      google_cloud_cli: {
        name: 'google_cloud_cli',
        requireAuth: true,
      },
      google_get_recommendations_cli: {
        name: 'google_get_recommendations_cli',
        requireAuth: true,
      },
      google_execute_sql_query: {
        name: 'google_execute_sql_query',
        requireAuth: true,
      },
    });
  });
});
