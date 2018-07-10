#!/bin/sh

forever stop me
forever start -l me.log -a --uid me "$(pwd)/$(dirname $0)"/../index.js