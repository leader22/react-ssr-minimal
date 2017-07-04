import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import render from '../views/layout';
import Root from '../../app/root';

const router = Router();

router.get('/', (_, res) => {
  const state = {
    title: 'Hello, SSR!',
    items: [
      { text: 'These TODOs are created by server', id: 1499151555644 },
      { text: 'Styling', id: 1499151565644 },
      { text: 'Add README', id: 1499151667696 },
    ],
  };

  res.send(render({
    title: state.title,
    children: renderToString(<Root {...state} />),
    state: JSON.stringify(state),
  }));
});

export default router;
