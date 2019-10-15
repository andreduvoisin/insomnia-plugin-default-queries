# insomnia-plugin-default-queries

[![npm](https://img.shields.io/npm/v/insomnia-plugin-default-queries)](https://www.npmjs.com/package/insomnia-plugin-default-queries)

This is a plugin for [Insomnia](https://insomnia.rest) that allows users to set default
queries for requests.

## Installation

Install the `insomnia-plugin-default-queries` plugin from Preferences > Plugins.

## Usage

Queries can be added by setting a `DEFAULT_QUERIES` environment variable.

```json
{
  "DEFAULT_QUERIES": {
    "name": "ferret",
    "color": "purple"
  }
}
```

## Acknowledgments

This plugin is based on [insomnia-plugin-default-headers](https://github.com/getinsomnia/insomnia/tree/master/plugins/insomnia-plugin-default-headers).
