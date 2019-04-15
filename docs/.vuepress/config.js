//const buildSection = require('./utils/buildSidebar')

const path = require("path");
const fs = require("fs");
const DOCSPATH = "docs";


const config = {
  title: "Qredit Network",
  description: "The central knowledge hub for Qredit blockchain",
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
      text: 'Delegate Central',
      link: 'https://qredit.network'
    }],
    sidebar: { 
        '/':  [['/', 'Qredit Overview'],
              {
                title: "Delegates",
                collapsable: false,
                children: [
                    "/delegates/",
                  "/delegates/node-install",
                  "/delegates/payouts",
                ]
              }, {
                title: "Voting",
                collapsable: false,
                children: [
                  "/voting/",
                  "/voting/how-to-vote-qredit-desktop-wallet",
                  "/voting/how to use-qredit-mobile-wallet",
                ]
              }, {
                title: "Exchanges",
                collapsable: false,
                children: [
                  "/exchanges/",
                ]
              }, {
                title: "Merchants",
                collapsable: false,
                children: [
                  "/merchants/",
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
