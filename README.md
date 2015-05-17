# EthPanel

A friendly web interface to ethereum node.

EthPanel is designed to be a lightweight, full functional, and browser only app. Browser only means it runs completely in browser, requires nothing to be installed on your computer.

EthPanel communicates with your ethereum node through json rpc, so make sure you enabled json rpc of your ethereum node.

Check out the live version [here](http://janx.github.io/ethpanel/).

## Build

You must have [npm](https://www.npmjs.org/) installed on your computer.

From the root project directory run these commands from the command line:

    npm install

This will install all dependencies.

To build the project, first run this command:

    npm start

This will perform an initial build and start a watcher process. `build/` directory will be created and all output will be put there.

To build a production version, run:

    npm run release

To run the app, simply open `build/index.html`.

## Tip

Besides rpc, you also need to allow cross domain ajax request on go-ethereum:

    geth --rpc --rpccorsdomain "*"

'*' will allow ajax request from any domain. You can set it to a more specific domain, e.g. `http://localhost:8080`.
