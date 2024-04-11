import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    input: {
      target: './petstore.yaml',
    },
    output: {
      mode: 'split',
      target: 'src/petstore.ts',
      client: 'hono',
      override: {
        hono: {
          handlers: 'src/handlers',
        },
        zod: {
          strict: {
            response: true,
          },
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});
