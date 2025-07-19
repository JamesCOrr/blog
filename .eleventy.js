export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/bundle.css");
    eleventyConfig.addWatchTarget("srcbundle.css");

    return {
        dir: {
          input: "src",
          output: "_site"
        }
    }
};