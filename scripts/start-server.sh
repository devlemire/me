#!/bin/sh

cd "$(pwd)/$(dirname $0)"/../public

yarn build

cd "$(pwd)/$(dirname $0)"

forever stop me
forever start -l me.log -a --uid me "$(pwd)/$(dirname $0)"/../index.js