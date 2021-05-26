FROM alpine:3.7
RUN apk add --no-cache mysql-client
COPY schema.sql migrate.sh ./

ENV DB_PASS=password
ENV DB_USER=hubbit
ENV DB_HOST=db
ENV DB_NAME=hubbit_db

ENTRYPOINT ["sh", "./migrate.sh"]
