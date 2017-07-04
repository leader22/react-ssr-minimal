import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import render from '../views/layout';
import Root from '../../app/root';

const router = Router();

router.get('/', (_, res) => {
  const state = {
    items: [
      { text: 'Styling', id: 1499151565644 },
      { text: 'Add README', id: 1499151667696 },
    ],
  };
  const data = {
    title: 'SSR mock',
    children: renderToString(<Root {...state} />),
    // TODO: sanitize
    state: JSON.stringify(state),
  };
  res.send(render(data));
});

export default router;
