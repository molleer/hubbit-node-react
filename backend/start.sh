#! /bin/bash

# DB credentials
if [[ -z "${DB_PASS}" ]]; then 
    export DB_PASS=password
fi
if [[ -z "${DB_USER}" ]]; then 
    export DB_USER=hubbit
fi
if [[ -z "${DB_HOST}" ]]; then 
    export DB_HOST=localhost
fi
if [[ -z "${DB_NAME}" ]]; then 
    export DB_NAME=hubbit_db
fi

# Gamma variables
# When sending requestes to Gamma
if [[ -z "${GAMMA_URL}" ]]; then
    export GAMMA_URL=http://localhost:8081
fi
# When redirecting the user to Gamma
if [[ -z "${GAMMA_REDIRECT_URL}" ]]; then
    export GAMMA_REDIRECT_URL=http://localhost:8081
fi
if [[ -z "${GAMMA_CLIENT_ID}" ]]; then
    export GAMMA_CLIENT_ID=id
fi
if [[ -z "${GAMMA_CLIENT_SECRET}" ]]; then
    export GAMMA_CLIENT_SECRET=secret
fi
if [[ -z "${GAMMA_CALLBACK_URL}" ]]; then
    export GAMMA_CALLBACK_URL=http://localhost:3001/callback
fi

# Other
if [[ -z "${SESSION_SECRET}" ]]; then
    export SESSION_SECRET=secret
fi
if [[ -z "${PORT}" ]]; then 
    export PORT=8080
fi 
if [[ -z "${HOST}" ]]; then
    export HOST="http://localhost:${PORT}"
fi
npm start
