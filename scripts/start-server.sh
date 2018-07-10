#!/bin/sh

SCRIPT_DIR="$(pwd)/$(dirname $0)"

cd $SCRIPT_DIR/../

yarn

cd $SCRIPT_DIR/../public

yarn

yarn build

forever stop me
forever start -l me.log -a --uid me $SCRIPT_DIR/../index.js