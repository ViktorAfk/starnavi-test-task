import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { server } from '@/mocks/server';
import { configure } from '@testing-library/react';
configure({testIdAttribute: 'data-cy'});

beforeAll(() => {
  // Start the interception.
  server.listen()
  console.log('listen server ...')
})
 
afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})
 
afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})