# 👟 Delay Calculator

Calculate safe delays for sneaker botting, with discord integration.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to have [nodejs](https://nodejs.org/en/) installed in order to run. You will also need npm but this is installed with nodejs.

### Installing

First you will clone or download this repository, then open your favorite text editor, mine is [vscode](https://code.visualstudio.com/). Then open up the console and do the following command.

```
npm install
```

Now add your custom command prefix + discord bot token into the config.json file. You can create a discord application through discord's [developer portal](https://discordapp.com/developers/applications).

## Running the tests

Try running the delay bot with the following command.

```
npm start
```

You should see a message inside your console saying "Delay Calculator Started!", also the discord bot should be alive, if invited into a server.

## Deployment

If you would like to run this 24/7 off your personal machine I would reccomend using the free credit given with google cloud, and create a server. You can make sure it runs all the time with a npm package named [PM2](http://pm2.keymetrics.io/) which will restart if errors or crashes happen.

## Built With

* [Nodejs](https://nodejs.org/en/) - Javascript Runtime Environment
* [NPM](https://www.npmjs.com/) - Node Package Manager
* [Discordjs](https://discord.js.org/#/) - Discord API Wrapper

## Authors

* **Ethan Zoller** - [Twitter](https://twitter.com/ethanzolla)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
