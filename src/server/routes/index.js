import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import render from '../views/layout';
import Root from '../../app/root';

const router = Router();

router.get('/', (_, res) => {
  const routes = [
    { name: 'SSR', href: '/ssr', },
    { name: 'initial data from server', href: '/data-only', },
    { name: 'do nothing', href: '/nothing', },
  ];
  const el = routes.map(r => `<li><a href="${r.href}">${r.name}</a></li>`).join('');
  res.send(`<ul>${el}</ul>`);
});

router.get('/ssr', (_, res) => {
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

router.get('/data-only', (_, res) => {
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
    children: '',
    state: JSON.stringify(state),
  }));
});

router.get('/nothing', (_, res) => {
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
    children: '',
    state: JSON.stringify({}),
  }));
});

export default router;
