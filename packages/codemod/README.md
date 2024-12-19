# Codemod

This script is used to modify files using icds components to upgrade from v2 to v3.

## Prerequisites

- Node.js installed on your machine.

## How to Run

npx @ukic/codemod <dir> <type>

Options:

  --dir      directory to components using icds
                                                [string]
  --type   either web-component- or reactComponent version
                                                [string] [default: 'default'] | 'react'

Examples:
  npx @ukic/codemod ./#path/app/src/components react


or run locally via 

- npm @ukic/codemod 
- cd to codemod files
- node ./codemod ./#path/app/src/components default
   