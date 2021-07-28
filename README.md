# HTDB-app

For bootstrapping nextjs servers which will deliver HTDB content.

A primer for the [HTDB language is here](http://htdb.org/htdb/docs/scripting/syntax.html)

# Install

```
$ git clone https://github.com/xpollen8/HTDB-app.git
$ npm i
$ npm run dev
```

Then visit `http://localhost:3000` with a browser to see a simple htdb file based website being rendered.

# What it is

HTDB is a very old web technology (dating from 1994), was written in C
and used as a fast-cgi module for apache web servers.

HTDB's advantage over simple HTML files is in its ability to manage multiple "web pages" inside documents containing related "pages", using a text editor.

Those .htdb documents support macro expansions, user-written scripting functions,
as well as a suite of DSO library functions to gain access to more sophisticated
capabilities: encryption, database, etc

# Why does this exist?

A few people have put significant work into developing HTDB-based websites.
As times change, the way the world delivers websites is less via dedicated webservers and more
via _serverless_ methods.

HTDBjs attempts to bridge these worlds, by allowing a modern nextjs/React application
to be able to parse and deliver the older HTDB documents without much fuss.

# Announcement!

A 20-year goal of making HTDB be an arbitrary way to manage sophisticated "living"
documents has just been realized.

HTDB now allows one to embed javascript _directly_ into your documents.

```
#define	thing	This is a random sentence
#define	index.html
	Hello World!

	This is the date: ${js( return Date();)}

	Here is an example, where JS has access to HTDB definitions:

	${js(
		const thing = getval('thing');
		return thing.replace('random', 'crazy');
	)}
```
