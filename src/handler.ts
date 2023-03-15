import { Router } from 'itty-router';

import Xumm from './handlers/xumm';

const router = Router();

router
  .get('/xumm', Xumm)
  .get('*', () => new Response('Not found', { status: 404 }));

export const handleRequest = request => router.handle(request);
