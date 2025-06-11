import StyleDictionary from "style-dictionary";
import { transforms, transformTypes } from "style-dictionary/enums";

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

await sd.registerTransform({
  name: transforms.timeSeconds,
  type: transformTypes.value,
  filter: function (token) {
    console.log("token!");
    return token.attributes.category === "#01nugu_Primitive_Token/Mode 1";
  },
  transform: function (token) {
    console.log("transform");
    // Note the use of prop.original.value,
    // before any transforms are performed, the build system
    // clones the original token to the 'original' attribute.
    // return (parseInt(token.original.value) / 1000).tostring() + "s";
  },
});

await sd.registerFormat({
  name: "css/variables",
  format: function (params) {
    const tokens = params.allTokens;
    const names = tokens.map((token) => {
      return {
        [token.name.replaceAll("01nugu-primitive-token-mode-1", "-")]:
          token["value"],
      };
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
    source: ["token.json"],
    // source: ["figma_token.json"],
  })
).buildAllPlatforms();
