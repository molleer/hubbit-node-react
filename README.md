# hubbIT

[hubbIT](https://github.com/cthit/hubbIT) rewritten from Ruby on Rails to React and Node.

## Development

Setup dependencies

```
docker compose -f gamma.docker-compose.yml up -d
docker compose up -d db
```

Wait a few seconds until the db is ready for connections and run

```
docker-compose up migration
```

Start the frontend with

```
cd frontend
npm install
npm start
```

Start the backend with

```
cd backend
npm install
bash start.sh
```

Both the backend and frontend reloads when the code has changed.

## DB schema

MariaDB is used with the same schema as the original[hubbIT](https://github.com/cthit/hubbIT) such that no data will be lost when the project is deprecating.
