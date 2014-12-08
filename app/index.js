var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  /*promptUser: function() {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name ?'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },*/

  gruntfile: function () {
    this.copy('_gruntfile.js', 'Gruntfile.js');
  },

  packageJSON: function () {
    this.template('_package.json', 'package.json');
  },

  git: function () {
    this.template('gitignore', '.gitignore');
  },

  bower: function () {
    this.copy('bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
  },

  jshint: function () {
    this.copy('jshintrc', '.jshintrc');
  },

  editorconfig: function () {
    this.copy('editorconfig', '.editorconfig');
  },

  readme: function () {
    this.copy('_README.md', 'README.md');
  },

  app: function () {
    this.directory('_app', 'app');
  },

  install: function () {
    this.on('end', function () {
      // npm install, bower install
      this.installDependencies();
    });
  }

});
