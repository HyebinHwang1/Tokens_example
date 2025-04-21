import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  platforms: {
    css: {
      transformGroup: "css",
      files: [
        {
          destination: "./src/app/theme.css",
          format: "css/variables",
        },
      ],
    },
  },
});

await sd.registerFormat({
  name: "css/variables",
  format: function (params) {
    const tokens = params.allTokens;
    const names = tokens.map((token) => {
      return { [token.name.replaceAll("core-", "--color-")]: token["$value"] };
    });

    const cssVariables = names
      .map((obj) => {
        const [key] = Object.keys(obj);
        return `  ${key}: ${obj[key]};`;
      })
      .join("\n");

    return `@theme {\n${cssVariables}\n}`;
  },
});

await (
  await sd.extend({
    source: ["figma_token.json"],
  })
).buildAllPlatforms();
