# Civic Tech Waterloo Region Public Website

## Contributor Guide
So you want to contribute to the Civic Tech Waterloo Region website. Welcome!!

You can find our open issues here: [https://github.com/CivicTechWR/ctwr_website/issues](https://github.com/CivicTechWR/ctwr_website/issues)

Feel free to pick one to work on or add a new issue if you see something that could use improvement.

When developing, please create your own branch off of the `master` branch and when you're ready, submit your pull request (PR) to `master` and reference the issue you were working on in the PR description. Another contributor should review and merge your PR. You can request a review from `s-kennedy`, just click on "Reviewers".


## Getting Started

#### Prerequisites:
- Git
- Ruby version 2.5.1 or higher
- Jekyll

#### Quickstart:

1. Clone the repo
`git clone https://github.com/CivicTechWR/ctwr_website.git`

2. Navigate into the project folder
`cd ctwr_website`

3. Install the dependencies
`bundle`

4. Serve the development site with Jekyll
`bundle exec jekyll serve`

5. Open it in the browser by navigating to `http://127.0.0.1:4000/ctwr_website/`

### Troubleshooting

#### Git
Git is a version control system (VCS) that works with Github, which is where the code for this website is hosted.

[Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

#### Ruby
Check what version of Ruby you're on by running `ruby -v` in the command line. If it's less than 2.5.1, you'll need to upgrade or install another version of Ruby alongside the current one. RVM is a program to help manage your Ruby versions. RVM stands for Ruby Version Manager.
[Install RVM](https://rvm.io/rvm/install)

Once you have RVM installed, you can install the correct version of Ruby with the command `rvm install 2.5.1`

#### Bundler
If you don't have bundler, you can install it with `gem install bundler`

#### Jeykyll
Jekyll has installation guides for macOS, Ubuntu, and Windows: [Install Jekyll](https://jekyllrb.com/docs/installation/)

If you have any other issues or questions, you can [post the issue on this repo](https://github.com/CivicTechWR/ctwr_website/issues) or contact Sharon - *s-kennedy* on Github or *sharon* on the CTWR slack.


## Deployment

The website is hosted on Github Pages and it builds from the `gh-pages` branch. To deploy the website, make sure all of the changes have been merged to the `master` branch and tested locally. Then make a PR from `master` to `gh-pages`. Once it's merged, Github rebuilds the website and the changes should be live.

If you have admin permissions you can deploy directly from your command line:

Merge your branch to master, then push the master branch to origin, then push the master branch to gh-pages:
```
git checkout master
git merge your_branch_name
git push origin master
git push origin master:gh-pages
```

