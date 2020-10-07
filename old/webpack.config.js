module.exports = {
  entry: './app/app.jsx',
  output: {
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage : 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Map: 'app/components/Map.jsx',
      GoogleMap: 'app/components/GoogleMap.jsx',
      Network: 'app/components/Network.jsx',
      Examples: 'app/components/Examples.jsx',
      TodoApp: 'app/components/TodoApp.jsx',
      TodoList: 'app/components/TodoList.jsx',
      Todo: 'app/components/Todo.jsx',
    },
    extentions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        query : {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
