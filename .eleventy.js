/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

const htmlmin = require("html-minifier");
const moment = require('moment');

const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
var markdownItEmoji = require('markdown-it-emoji');

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const timeToRead = require('eleventy-plugin-time-to-read');

moment.locale('en');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./_tmp/site.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/site.css': './assets/styles/site.css' })
  eleventyConfig.addPassthroughCopy("./src/site.webmanifest");
  eleventyConfig.addPassthroughCopy("./src/images");

  eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('blog', 'layouts/blog.njk');

  eleventyConfig.setLibrary(
    'md',
    markdownIt().use(markdownItAnchor).use(markdownItEmoji)
  )

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(timeToRead, { style: "short" });

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

  eleventyConfig.addNunjucksShortcode("codepen", function (url) {

    const url_array = url.split("/");

    const profile_url_array = url_array.filter((string, index) => {
      return (index < (url_array.length - 2)) ? true : false
    })

    const username = profile_url_array[profile_url_array.length - 1];
    const user_profile = profile_url_array.join("/");
    const data_slug_hash = url_array[url_array.length - 1];

    return `<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="${data_slug_hash}" data-user="${username}" style="height: 571px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"><span><a href="${url}">See the pen</a> (<a href="${user_profile}">@${username}</a>) on <a href="https://codepen.io">CodePen</a>.</span></p><script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: "src",
      output: "dist"
    }
  }

};