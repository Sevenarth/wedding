#!/usr/bin/env bash

case ${1:-local} in
    local)
        D1_DB="DB --local"
        ;;
    preview|dev|development)
        D1_DB="DB --remote --preview"
        ;;
    prod|production)
        D1_DB="DB --remote"
        ;;
    *)
        echo "Invalid deployment specified. Use 'local', 'preview', or 'production'."
        exit 1
        ;;
esac

rm -rf ./migrations

npx wrangler d1 migrations create DB create_tables

npx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0001_create_tables.sql

npx wrangler d1 migrations apply $D1_DB
