import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// will register them on StyleDictionary object
// that is installed as a dependency of this package.
register(StyleDictionary);

const sd = new StyleDictionary({
  source: [
    "projects/custom-library/src/tokens/Global.json",
    "projects/custom-library/src/tokens/Semantic.json",
  ],
  log: {
    verbosity: "default",
  },
  preprocessors: ["tokens-studio"],
  platforms: {
    scss: {
      buildPath: "projects/custom-library/src/styles/",
      transformGroup: "tokens-studio",
      transforms: ["shadow/scss/shorthand", "name/kebab"],
      files: [
        {
          destination: "variables.scss",
          format: "scss/variables",
          filter: (token) => token.filePath.includes("Semantic.json"), // Filtrar tokens de Semantic.json
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
