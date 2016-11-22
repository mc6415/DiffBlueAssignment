Howdy developer.

We would like you to spend no more than 4 hours of happy fun time turning a JSON data source that looks like this:

```json
// Format = "<file name with path>" : [<Number of lines with test coverage>, <Total number of lines of code>]
{
  "Main.java": [0, 10],
  "utils/Copy.java": [15, 37],
  "utils/Paste.java": [14, 14],
  "utils/nums/Add.java": [9, 22],
  "ui/Window.java": [23, 79]
}
```

Into a whizzy front end that displays the coverage for the given files as well as totals for files within each directory on the tree. Here are a couple of requirements:

### Directories

For each directory the user should see relative coverage of lines taken across all files in the directory and its subdirectories. This can take any form you feel is relevant to the user experience - think about what you would like to know about test coverage for your projects?

### Assume Huge Numbers

The project outlined above is incredibly small, we expect the UI to be able to cope with much bigger data sources see (and feel free to use) the example [here](https://gist.github.com/royletron/f535f03830c92cf840665831e8d3d528).

## Some Pointers

### Prioritise the value

We appreciate this is a big ask in the time frame, so tackle the parts you believe to be the most important, or that show off your skills best. Show us the most user value you can in the time.

### Show your working

Get your project on Github and use your commit log as a way of telling us how you are approaching it. A README would also be great, explain to us how to get your project running, and leave a note if you need to justify anything.

### We're looking to push this to production

*Not really*, but you need to give us what you feel is appropriate for an application with big traffic - did someone say unit tests?

### Use your best tools.

The only thing we absolutely want to see is React, everything else is yours to show off. So use what you know, unless you want to prove us wrong!

### We're not giving you a design

We mean this role to have an active engagement with the UI and UX of our product, so release your creative flair!

### Describe things you've missed

If you don't get time to finish something off, or if you know that there are specific use cases that need more work let us know - this is as good as code itself in some cases.
