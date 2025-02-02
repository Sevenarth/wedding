#!/usr/bin/env bash

if [ $# -lt 1 ]; then
    echo "supply a path for the csv data."
    exit 1
fi

DATA_FILEPATH=$(realpath $1)
if [ ! -f $DATA_FILEPATH ]; then
    echo "supply a valid file for the csv data."
    exit 1
fi

DATA_FILENAME=${DATA_FILEPATH##*/}
SEED_FILENAME=${DATA_FILENAME%.*}.sql

case ${2:-local} in
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

./generate-seed.py $1 > $SEED_FILENAME
npx wrangler d1 execute $D1_DB --file $SEED_FILENAME
