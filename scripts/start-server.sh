#!/bin/sh

cd "$(pwd)/$(dirname $0)"/../public

yarn build

forever stop me
forever start -l me.log -a --uid me "$(pwd)/$(dirname $0)"/../index.js