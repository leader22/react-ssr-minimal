import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import DB from '../db';
import render from '../views/layout';
import Root from '../../app/root';

const router = Router();
const db = new DB();

router.get('/', (_, res) => {
  const routes = [
    { name: 'ServerSideRendering', href: '/ssr', },
    { name: 'ClientSideRendering w/ initial data from server', href: '/csr-with-data', },
    { name: 'ClientSideRendering w/o initial data from server', href: '/csr-without-data', },
  ];
  const el = routes.map(r => `<li><a href="${r.href}">${r.name}</a></li>`).join('');
  res.send(`<ul>${el}</ul>`);
});

router.get('/ssr', (_, res) => {
  return db.readState()
    .then(state => {
      return res.send(render({
        title: state.title,
        children: renderToString(<Root {...state} />),
        state: JSON.stringify(state),
      }));
    });
});

router.get('/csr-with-data', (_, res) => {
  return db.readState()
    .then(state => {
      res.send(render({
        title: state.title,
        children: '',
        state: JSON.stringify(state),
      }));
    });
});

router.get('/csr-without-data', (_, res) => {
  return db.readState()
    .then(state => {
      res.send(render({
        title: state.title,
        children: '',
        state: JSON.stringify(null),
      }));
    });
});

router.get('/data', (_, res) => {
  return db.readState()
    .then(state => {
      return res.json(state);
    });
});

export default router;
