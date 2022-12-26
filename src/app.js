route('/', 'home.mellow');

const Mellow = function() {
    var app = new App();
    app.setTitle('Example Project');
    return {
        helloworld: 'Hello World'
    };
};

ready(Mellow);