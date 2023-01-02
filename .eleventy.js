/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

const htmlmin = require("html-minifier");
const moment = require('moment');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

moment.locale('en');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./_tmp/site.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/site.css': './assets/styles/site.css' })
  eleventyConfig.addPassthroughCopy("./src/site.webmanifest");

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('blog', 'layouts/blog.njk');

  eleventyConfig.addPlugin(syntaxHighlight);

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

  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL');
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }

};