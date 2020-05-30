#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_ROOT=$(realpath "${DIR}/..")
hooks="pre-commit"

for hook in ${hooks}; do
  if [ -f $DIR/$hook ]; then
    echo "Activating hook: ${hook}"
    ln -s -f ${DIR}/${hook} ${PROJECT_ROOT}/.git/hooks/${hook}
  fi
done
