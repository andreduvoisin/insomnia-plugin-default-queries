module.exports = function(context) {
  const queries = context.request.getEnvironmentVariable("DEFAULT_QUERIES");

  if (!queries) {
    return;
  }

  for (const name of Object.keys(queries)) {
    const value = queries[name];

    if (context.request.hasParameter(name)) {
      console.log(
        `[default-queries] Skipping query; already has a value.`,
        `query=${name},`,
        `defaultValue=${value},`,
        `overrideValue=${context.request.getParameter(name)}`
      );
      continue;
    }

    context.request.setParameter(name, value);
    console.log(
      `[default-queries] Set default query.`,
      `query=${name},`,
      `value=${value}`
    );
  }
};
