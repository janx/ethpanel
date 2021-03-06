# EthPanel

A friendly web interface to ethereum node.

EthPanel is designed to be a lightweight, full functional, and browser only app. Browser only means it runs completely in browser, requires nothing to be installed on your computer.

![screenshot](https://github.com/janx/ethpanel/raw/master/screenshot.png)

EthPanel is still in its early stage. If you want any specific function or have an idea, please create an issue.

## Run

EthPanel communicates with ethereum node through json rpc, so make sure your node enabled json rpc and allowed [cross-origin resource sharing](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing):

    geth --rpc --rpccorsdomain "http://janx.github.io"

This will allow the EthPanel hosted on http://janx.github.io/ethpanel to access your node.

By default EthPanel suppose the node is listening http://localhost:8545 for json rpc request.

Check out the live version [here](http://janx.github.io/ethpanel/).

It's also deployed on [EthFans.org](http://ethfans.org) as a [utility](http://ethfans.org/ethpanel/).

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
