import { Router } from 'itty-router';
import Xumm from './handlers/xumm'
const router = Router();

router
  .post('/xumm*', Xumm)
  .get('/xumm/:md', Xumm)
  .get('*', () => new Response('Not found', { status: 404 }));


export const handleRequest = request => router.handle(request);
