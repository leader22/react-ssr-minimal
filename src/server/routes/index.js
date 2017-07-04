import { Router } from 'express';

import render from '../views/layout';

const router = Router();

router.get('/', (_, res) => {
  const data = {
    title: 'SSR mock',
    children: '<div>Hello SSR</div>',
  };
  res.send(render(data));
});

export default router;
