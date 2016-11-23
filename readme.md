# DiffBlue Assignment

## Getting Started

There are two ways in which the application can currently be viewed, you can either:

### Download Local Copy
In order to follow this route please ensure that you have the current version of nodeJS installed the machine that will be running this.  You can then download this repository as a ZIP, if you then extract the contents of this ZIP file somewhere you can follow the following steps to get it up and running:

1) Open a Terminal/Command Prompt at the directory and run the command `npm install` this will grab all the dependencies needed to get this up and running.

2) You can then run the application with either of the following commands:

`npm start`

or

`.\node_modules\.bin\node-babel --presets react,es2015 src\server.js`

If you run into problems with `npm start` the second command will give more verbose error messages.

### View Online

The second option is probably the easiest, and that is you can simply view the file [HERE](http://sample-env-1.gt7ccf9ufv.eu-west-1.elasticbeanstalk.com/)

## Further Things To Do

* I missed out on unit tests as given the time limit I wanted to get the functionality down rather than run out of time later on.

* I wanted to make the representation of the code coverage more visual, I'd planned to achieve this by having some vertical bars that would show at a glance the percentage coverage for files.

* I had planned to add some sort of functionality where the user could upload a JSON file themselves which would then be analysed, given the time frame I was only able to get the one provided working sadly.
