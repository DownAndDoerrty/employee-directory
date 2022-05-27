
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

## To start the entire project

Run `./bin/run.sh` in the employee-directory project root from your terminal.

This run your frontend, backend, and ensure your database is running.
