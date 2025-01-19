This is the Football Data Demo App built with NextJS and using [football-data.org](https://www.football-data.org/) API
It shows supported competitions livescore and standings

## Getting Started
First Make an .env file in your route directory and add following parameters:

```env
APP_URL=your app url for local dev its http://localhost:3000
Football_DATA_API_AUTH_TOKEN=You Should get that from football-data.org website
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
