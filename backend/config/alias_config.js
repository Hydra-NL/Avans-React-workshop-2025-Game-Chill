const path = require("path");
const moduleAlias = require("module-alias");

moduleAlias.addAliases({
  "@/events": path.join(__dirname, "../src/events"),
  "@/graphql": path.join(__dirname, "../src/graphql"),
  "@/middleware": path.join(__dirname, "../src/middleware"),
  "@/modules": path.join(__dirname, "../src/modules"),
  "@/constants": path.join(__dirname, "../src/utils/constants"),
  "@/helpers": path.join(__dirname, "../src/utils/helpers"),
  "@/security": path.join(__dirname, "../src/utils/security"),
  "@/validation": path.join(__dirname, "../src/utils/validation"),
});
