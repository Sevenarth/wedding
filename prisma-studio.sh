#!/usr/bin/env bash

D1_LOCAL_FILEPATH=$(ls .wrangler/state/v3/d1/miniflare-D1DatabaseObject/*.sqlite)
export DATABASE_URL="file:$(realpath $D1_LOCAL_FILEPATH)"
npx prisma studio
