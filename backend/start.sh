#! /bin/bash
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

if [[ -z "${PORT}" ]]; then 
    export PORT=8080
fi 

npm start
