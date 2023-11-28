const { DateTime } = require("luxon");
const postUrl = "https://burntlands.ca/post-server";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/*.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("imageUrl", (id) => {
    return `${postUrl}/image/${id}`;
  });

  eleventyConfig.addFilter("mapsUrl", (id) => {
    return `${postUrl}/maps/${id}`;
  });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
    var theDate = new Date(dateVal);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return theDate.toLocaleDateString(locale, options);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
