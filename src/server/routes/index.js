import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import render from '../views/layout';
import Root from '../../app/root';

const router = Router();

router.get('/', (_, res) => {
  const data = {
    title: 'SSR mock',
    children: renderToString(<Root />),
  };
  res.send(render(data));
});

export default router;
