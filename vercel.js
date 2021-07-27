module.exports = {
	/*
	"builds": [
		{ "src": "*.htdb", "use": "git+https://github.com/xpollen8/HTDBjs.git" },
	],
	*/
  "functions": {
    "api/*.js": {
      "includeFiles": "htdb/**"
    }
  }
}
