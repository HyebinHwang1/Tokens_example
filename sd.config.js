import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  platforms: {
    css: {
      transformGroup: "css",
      files: [
        {
          destination: "./goodTest.css",
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
      return {
        [token.name.replaceAll("01nugu-primitive-token-mode-1", "-")]:
          token["$value"],
      };
    });

    const cssVariables = names
      .map((obj) => {
        const [key] = Object.keys(obj);
        if (key.includes("--typo-font-eng") || key.includes("--typo-font-jp")) {
          return;
        }
        if (key.includes("--typo")) {
          return `  ${key.replaceAll("--typo-", "--")}: ${obj[key]};`;
        }
        return `  ${key}: ${obj[key]};`;
      })
      .join("\n");

    return `@theme {\n${cssVariables}\n}`;
  },
});

await (
  await sd.extend({
    source: ["figma-token.json"],
    // source: ["figma_token.json"],
  })
).buildAllPlatforms();
