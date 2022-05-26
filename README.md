
# Welcome

---

## Prerequisites

- [Node](https://formulae.brew.sh/formula/node)
- [Docker](https://docs.docker.com/get-docker/)
- [PostgreSQL](https://postgresapp.com/)
- [TMUX](https://github.com/tmux/tmux/wiki)
- [Overmind](https://github.com/DarthSim/overmind)

---

## To start project

Add a `.env` file in the `/backend` directory that contains an exported `DATABASE_URL`. The credentials in the URL should reflect those found in your `docker-compose.yml` file in the project root.

Then, from the employee-directory project root run the following commands in your terminal:

1. `docker-compose up`
2. `./bin/setup.sh`
3. `./bin/run.sh`

This should setup your Postgres database, create the Prisma client, seed your database, and install all necessary node modules.
