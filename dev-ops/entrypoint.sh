#!/bin/bash

yarn start:server:prod &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
