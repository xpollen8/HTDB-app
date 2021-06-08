# HTDB-app

For bootstrapping nextjs servers which will deliver HTDB content.

A primer for the [HTDB language is here](http://htdb.org/htdb/docs/scripting/syntax.html)

# Install

```
$ git clone https://github.com/xpollen8/HTDB-app.git
$ npm i
$ npm run dev
```

Then visit `http://localhost:3002` with a browser.

# What it is

HTDB is a very old web technology (dating from 1994), and was initially written in C
and used as a fast-cgi module for apache web servers.

Its claim to fame is a relatively simple way to manage multiple web pages inside documents containing related "pages", using a text editor.

Those documents would support macro expansions, user-written scripting functions,
as well as a suite of DSO library functions to gain access to more sophisticated
capabilities: encryption, database, etc

# Why does this exist?

A few people have put significant work into developing HTDB-based websites.
As times change, the way the world delivers websites is less via apache and more
via _serverless_ methods.

HTDBjs attempts to bridge these worlds, by allowing a modern nextjs/React application
to be able to parse and deliver the older HTDB documents without much fuss.

