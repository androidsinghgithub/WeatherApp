Ext.application({
	name: 'WeatherApp',
	
	views: ['weatherLScrn.WeatherLoginScreen','weatherLScrn.WeatherSearchScreen',
	        'weatherLScrn.WeatherForecastListView','weatherLScrn.WeatherForcastPanel'],
	models: ['weatherModel.WeatherModel'],
	stores: ['weatherStore.WeatherStore'],
	controllers: ['weatherController.WeatherController'],
	requires:[
	
	'WeatherApp.utils.WeatherUtils',
	
	],
	launch: function()
	{
		
		var login = Ext.create('WeatherApp.view.weatherLScrn.WeatherLoginScreen');
		Ext.Viewport.add(login);
		Ext.Viewport.setActiveItem(login);
		
		
	} //// End of launch
	
	
	
});