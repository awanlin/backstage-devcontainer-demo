import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const examplePlugin = createPlugin({
  id: 'example',
  routes: {
    root: rootRouteRef,
  },
});

export const ExamplePage = examplePlugin.provide(
  createRoutableExtension({
    name: 'ExamplePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
