//const buildSection = require('./utils/buildSidebar')

const path = require("path");
const fs = require("fs");
const DOCSPATH = "docs";


const config = {
  title: "Ark Ecosystem Documentation",
  description: "The central knowledge hub for all things Ark Ecosystem",
  plugins: [ 'tabs' ],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "~/assets/qredit-icon.png"
      }
    ]
  ],
  themeConfig: {
    logo: "~/assets/qredit-icon.png",
    repo: "ArkEcosystem/docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Exchanges',
      link: '/exchanges/'
    }, {
      text: 'Public API',
      link: '/api/public/v2/'
    },{
      text: 'ARK Docs',
      link: '/SDK/'
    }],
    sidebar: {
      "/api/json-rpc/": require("./sidebars/api/json-rpc"),
      "/api/public/": require("./sidebars/api/public"),
      "/api/": require("./sidebars/api"),
      "/sdk/": require("./sidebars/sdk"),
      "/faq/": require("./sidebars/faq"),
      "/introduction/": require("./sidebars/introduction"),
      "/tutorials/": require('./sidebars/tutorials'),
      "/guidebook/": require('./sidebars/guidebook'),
      "/exchanges/": require('./sidebars/exchanges'),
      "/releases/": require('./sidebars/releases'),
      "/security/": require('./sidebars/security'),
      "/archive/": require('./sidebars/archive'),
      "/": require('./sidebars/main'),
    },
    //algolia: {
    //  apiKey: '93e1d829aa41bf2114b9de44dadb4998',
    //  indexName: 'ark'
    //}
  }
};

module.exports = config
