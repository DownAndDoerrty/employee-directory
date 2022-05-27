
# Welcome

---

## Prerequisites

- [Node](https://formulae.brew.sh/formula/node)
- [Docker](https://docs.docker.com/get-docker/)
- [PostgreSQL](https://postgresapp.com/)
- [TMUX](https://github.com/tmux/tmux/wiki)
- [Overmind](https://github.com/DarthSim/overmind)

---

## To setup the project

1. Add a `.env` file in the `/backend` directory that contains an exported `DATABASE_URL`. There is an example `.env` file provided in the `/backend` directory. The credentials in the URL should reflect those found in your `docker-compose.yml` file in the project root.
2. From the employee-directory project root run `./bin/setup.sh` in your terminal

This should setup your Postgres database, create the Prisma client, seed your database, and install all necessary node modules.

---

## To start the entire project

Run `./bin/run.sh` in the employee-directory project root from your terminal.
This should run your frontend, backend, and ensure your database is running.

---

## To run the project in pieces

### Database

To create your PostgreSQL database:

```bash
docker-compose up -d
```

### Frontend

You'll likely want your backend running before trying to start the frontend.

```bash
cd frontend
npm install
npm run start
```

### Backend

Ensure that your database is up by running `docker-compose up -d`. If you're running this project in separate pieces, make sure the correct port is being validated with CORS on line 17 in `backend/index.ts` it'll likely be port `:3000`.

Before running the backend, set up Prisma by running:

```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npx prisma db seed
```

Then to run the backend:

```bash
npm run server
```
