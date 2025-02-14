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

npx wrangler d1 execute $D1_DB --command "drop table persons; drop table responses; drop table logins; drop table invites; delete from d1_migrations"
