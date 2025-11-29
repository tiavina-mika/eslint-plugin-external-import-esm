// Rule: require-external-js-extension
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Force .js extension on external module imports",
      category: "Best Practices",
      recommended: true
    },
    schema: [],
    fixable: "code",
    messages: {
      // This is the message displayed when the rule is violated
      missingJsExtension: "Expected .js extension for external import '{{ importPath }}'."
    }
  },
 create(context) {
    return {
      ImportDeclaration(node) {
        const source = node.source.value;

        if (typeof source !== "string") return;

        // Ignore internal relative imports
        if (source.startsWith("./") || source.startsWith("../")) return;

        // Ignore internal aliases (e.g., '@/')
        if (source.startsWith("@/")) return;

        // Detect external module paths (e.g., 'module/submodule/path')
          const isExternalModuleWithSubpath = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+/.test(source);

          if (!isExternalModuleWithSubpath) return;

          // Enforce .js extension only for external imports with subpath
          if (!source.endsWith(".js")) {
            context.report({
              node,
              messageId: "missingJsExtension",
              data: { importPath: source },
              fix(fixer) {
                return fixer.replaceText(node.source, `'${source}.js'`);
              }
            });
        }
      }
    };
  }
};
