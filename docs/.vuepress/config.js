//const buildSection = require('./utils/buildSidebar')

const path = require("path");
const fs = require("fs");
const DOCSPATH = "docs";


const config = {
  title: "Qredit Network",
  description: "The central knowledge hub for Qredit delegates",
  plugins: [ 'tabs' ],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/qredit-icon2.png"
      }
    ]
  ],
  themeConfig: {
    logo: "/qredit-icon2.png",
    xrepo: "a6patch/docs",
    xrepoLabel: "Contribute!",
    xeditLinks: true,
    xeditLinkText: "Help us improve this page!",
    docsDir: "docs",
    lastUpdated: true,
    nav: [{
      text: 'Documentation',
      link: '/'
    }, {
      text: 'Network Status',
      link: 'http://xqr-status.digitalwindmill.com'
    }, {
      text: 'Qredit Explorer',
      link: 'http://qredit.digitalwindmill.com'
    }, {
      text: 'Delegate Pool',
      link: 'http://pool.digitalwindmill.com'
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
      "/ark/": require('./sidebars/main'),
    },
    //algolia: {
    //  apiKey: '93e1d829aa41bf2114b9de44dadb4998',
    //  indexName: 'ark'
    //}
  }
};

module.exports = config
