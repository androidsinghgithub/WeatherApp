Ext.define('WeatherApp.controller.weatherController.WeatherController',{
	extend: 'Ext.app.Controller',
	alias: 'widget.weatherController',
	xtype: 'weatherController',
	
	init : function() {
		controller = this;
		Ext.create('WeatherApp.store.weatherStore.WeatherStore');
	},
	
	requires:[
	
	//'WeatherApp.utils.WeatherUtils',
	
	],
	config : {
		
			refs : {
				
				weatherLoginbtn:'weatherLoginScreen #weatherLoginbtn',
				weatherSearchbckbutton:'weatherSearchScreen #weatherSearchbckbutton',
				weatherSearchScreen:'weatherSearchScreen',
				weatherCityTextField:'weatherSearchScreen #weatherCityTextField',
				weatherForecastListView:'weatherForecastListView',
				weatherSearchbtn:'weatherSearchScreen #weatherSearchbtn',
				weatherLoginScreen:'weatherLoginScreen',
				weatherForcastbckbtn:'weatherForecastPanel #weatherForcastbckbtn',
				weatherSearchScreen:'weatherSearchScreen',
				weatherForcastHomebtn:'weatherForecastPanel #weatherForcastHomebtn',
				weatherForecastPanel:'weatherForecastPanel',
				forcastOkBtn:'weatherForecastPanel #forcastOkBtn',
				
	
			},
	
	control : {
		weatherLoginbtn:
			{
			tap: 'goToWeatherSearchScreen',
			},
			weatherSearchbtn:
			{
			tap: 'showWeatherForcast',
			},
			weatherSearchbckbutton:
			{
			tap: 'goToLoginScreen',
			},
			weatherForcastbckbtn:
			{
			tap: 'goToWeatherSearchScreen',
			},
			weatherForcastHomebtn:
			{
			tap: 'goToLoginScreen',
			},
			forcastOkBtn:
			{
			tap: 'goToWeatherSearchScreen',
			
			}
		
		
	},
	},
	goToWeatherSearchScreen: function()
	{
		var wthscreen ;
		if(this.getWeatherSearchScreen() === undefined){
			wthscreen = Ext.create('WeatherApp.view.weatherLScrn.WeatherSearchScreen');
		Ext.Viewport.add(wthscreen);
		}else{
			wthscreen =this.getWeatherSearchScreen();
		}
		Ext.Viewport.setActiveItem(wthscreen);
	},
	
	showWeatherForcast: function()
	{
		
		var mask= {
				
					xtype: 'loadmask',
                	message: 'Contacting Weather server... ', 
                }
		
		Ext.Viewport.setMasked(mask)
		
		
		var location= this.getWeatherCityTextField().getValue();
		var days=0;
		if(days === 0 ){
			days=5;
		}
		
		WUtils.getCallbacks(this.callbackTest)
		
		
		WUtils.getWeatherData(location,days,this.weatherSuccess);

	},
	weatherSuccess:function(weatherRes){
	
		var weatherdata_Store = Ext.getStore("weather_Store");
				weatherdata_Store.setData(weatherRes);
				
				var showWeatherForecast;
				if(controller.getWeatherForecastPanel() === undefined){
					showWeatherForecast = Ext.create('WeatherApp.view.weatherLScrn.WeatherForcastPanel');
				Ext.Viewport.add(showWeatherForecast);
				}else{
					showWeatherForecast =controller.getWeatherForecastPanel();
				}
				Ext.Viewport.setActiveItem(showWeatherForecast);
	},
	
	callbackTest:function(date){
	
	
		alert(date);
	
	},
	
	goToLoginScreen: function()
	{
		var loginscn ;
		if(this.getWeatherLoginScreen() === undefined){
			loginscn = Ext.create('WeatherApp.view.weatherLScrn.WeatherForecastListView');
		Ext.Viewport.add(loginscn);
		}else{
			loginscn =this.getWeatherLoginScreen();
		}
	
	Ext.Viewport.setActiveItem(loginscn);	
	},
});