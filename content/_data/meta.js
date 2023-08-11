console.log("=>" + process.env.NODE_ENV);
module.exports = {
  host: "www.tamizhvendan.in",
  siteUrl: "https://www.tamizhvendan.in",
  author: { name: "Tamizhvendan" },
  title: "Tamizhvendan's Personal Website",
  pirschDataCode: process.env.ELEVENTY_RUN_MODE === 'build' ? "wagCvwnxqqFKt5KPEQDnKWzX5q4EFrg7" : "",
  siteDescription: "I'm Tamizhvendan. A Pragmatic, Passionate, Polyglot & Product Engineer and Software Craftsman from Chennai, India 🇮🇳."
}