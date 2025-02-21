import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { examplePlugin, ExamplePage } from '../src/plugin';

createDevApp()
  .registerPlugin(examplePlugin)
  .addPage({
    element: <ExamplePage />,
    title: 'Root Page',
    path: '/example',
  })
  .render();
