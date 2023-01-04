# Website

I used [Docusaurus 2], a modern static website generator, to build my portfoilo Website. 

### Installation

```
I used VSU as my IDE to write markdown files, and do a website tranformation 
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

I'm using GitHub pages for hosting, and to learn a continuous integration best practices, as a convenient way to build the website and push to the `gh-pages` branch.
