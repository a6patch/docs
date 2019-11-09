//const buildSection = require('./utils/buildSidebar')

const path = require("path");
const fs = require("fs");
const DOCSPATH = "docs";


const config = {
  title: "Qredit Network",
  description: "The central knowledge hub for the Qredit Blockchain",
  plugins: ['tabs','@vuepress/medium-zoom'],
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
      text: 'Delegate Central',
      link: 'https://qredit.network'
    }],
    sidebar: { 
        '/':  [['/', 'Introduction to Qredit'],
              {
                title: "Voting",
                collapsable: false,
                children: [
                    "/voting/",
                  "/voting/qredit-dpos-explained",
                  "/voting/public-pools-explained",
                  "/voting/how-to-vote-qredit-desktop-wallet",
                  "/voting/how-to-use-qredit-mobile-wallet",
                ]
              }, {
                title: "Node Management",
                collapsable: false,
                children: [
                    "/nodes/",
                  "/nodes/relay-node-install",
                  "/nodes/red-node-fix",
                  "/nodes/secure-node-ssl",
                  "/nodes/plugin-install",
                 ]
              }, {
                title: "Delegates",
                collapsable: false,
                children: [
                    "/delegates/",
                  "/nodes/relay-node-install",  
                  "/delegates/forging-node-install",
                  "/delegates/payouts",
                 ]
              }, {
                title: "QAE",
                collapsable: false,
                 children: [
                    "/qae/",
                  "/qae/qae-documentation",
                  "/qae/token-interaction",
                 ]
              }, {
                title: "Exchanges",
                collapsable: false,
                children: [
                  "/exchanges/",
                "/exchanges/public-api",
                "/exchanges/rate-limiting",
                ]
              }],
      displayAllHeaders: false
    },
    //algolia: {
    //  apiKey: '93e1d829aa41bf2114b9de44dadb4998',
    //  indexName: 'ark'
    //}
  }
};

module.exports = config
