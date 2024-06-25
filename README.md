# graphic-starter-nr-basic

This is a basic [Vite + React](https://vitejs.dev/guide/) starter for Newsroom (NR) developers to quickly create a simple embeddable graphic. Created by newsroom developers to update our old "slush" based [graphic starter: globe-graphic-template](https://github.com/BostonGlobe/globe-graphic-template). This was first developed Mach 2023 using node version v18.14.0.

## Quick start

* Clone the repo or start a new repo using this repo as template.

* run `npm i` to install.

To develop: `npm start` or `npm run dev`. Hot loading dev page will appear in `http://localhost:5173/`

To build: `npm run build`. Compiled code will be in `dist` folder.

Globe font can be accessed via classes `.benton-n4` `.benton-n6` `.bentonsanscond-n4` or `.bentonsanscond-n6`

## Deploying and embedding

**To deploy to staging**: copy `dist` folder to shell.boston.com server

* graphic should be uploaded into `/[SECTION]/graphics/[YYYY]/[MM]/[PROJECT NAME]/` folder. (such as `metro/graphics/2023/03/chelsea-map/`)

* You can use apps such as [Transmit](https://panic.com/transmit/), [cyberduck](https://cyberduck.io/) or [FileZilla](https://filezilla-project.org/)

* or use `rsync` from you computer by running

```sh
  rsync ./dist/ shell.boston.com:/web/bgapps/html/[SECTION]/graphics/[YYYY]/[MM]/[PROJECT NAME] -avz --delete
```

**To deploy (upload) to production**: follow step below.

* SSH onto the server (`ssh shell.boston.com`)

* Navigate to the project folder (i.e. `cd /web/bgapps/html[SECTION]/graphics/[YYYY]/[MM]/[PROJECT NAME]`)

* To upload to production, while in the project folder, run `upload index.html` and `uploaddir assets` etc.

## Using Sidechain

This embed uses [NPR apps' Sidechain](https://apps.npr.org/sidechain/) module ([Github here](https://github.com/nprapps/sidechain)) as a replacement for pym.js that allows for responsive iframe embeds.

**To embed the graphic** use following code in arc:

```html
<side-chain src="your-project-url-here/index.html"></side-chain>
<script src="https://apps.bostonglobe.com/common/js/sidechain/loader.js"></script>
```
