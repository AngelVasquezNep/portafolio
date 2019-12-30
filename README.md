# Angelito's proyects

It contains some of my projects.
I can build awesome pages and native apps with React.

My main stack is:

- React
- Redux
- Redux Sagas
- React Native

> Builded with Nuxt.js

## Look me

[angelito](https://angelvasquez.now.sh/)

## Deploy with now (zeit)

This project is a now old version, for this reason, it needs to do:

```
yarn run generate
cd dist
vim now.json
```

Into `now.json`

```
{
  "name": "the-name-of-the-project",
  "alias": "the-alias-of-the-project", -> my-alias.now.sh
  "version": 1
}
```

Deploy:

```
now --public deploy (if you have a payment account, you don't need '--public' flag)
now alias (for point your lasted deploy like my-alias#automatic-hash.now.sh to my-alias.now.sh)

```

---

Note: at december, 2019, version 1 is deprecated.
