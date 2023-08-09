/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

const htmlmin = require("html-minifier");
const moment = require('moment');

const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
var markdownItEmoji = require('markdown-it-emoji');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const timeToRead = require('eleventy-plugin-time-to-read');
const embedTwitter = require("eleventy-plugin-embed-twitter");
const eleventyGoogleFonts = require("eleventy-google-fonts");

const inspect = require("util").inspect;

moment.locale('en');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./_tmp/site.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/site.css': './assets/styles/site.css' })
  eleventyConfig.addPassthroughCopy("./site.webmanifest");
  eleventyConfig.addPassthroughCopy("./assets/images");

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('blog', 'layouts/blog.njk');

  eleventyConfig.setLibrary(
    'md',
    markdownIt().use(markdownItAnchor).use(markdownItEmoji)
  )

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(timeToRead, { style: "short" });
  eleventyConfig.addPlugin(embedTwitter, {
    width: "50%"
  });
  eleventyConfig.addPlugin(eleventyGoogleFonts);

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
  eleventyConfig.addFilter('date', date => {
    return moment(date).format("yyyy-MM-DD");
  });

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL');
  });

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: "content",
      output: "dist",
      includes: "../_includes"
    }
  }

};