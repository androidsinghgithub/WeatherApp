Ext.define("WeatherApp.utils.WeatherUtils",{
	singleton: true,
	alternateClassName: 'WUtils',
	
	getWeather:function(){
	 
	  return "Weather"+new Date();
	   
	},
	
	getCallbacks:function(callback){
	
	setTimeout(function(){
	
	
	callback(new Date());
	
	},6000)
	
	
	   
	
	},
	
	getWeatherData:function(city,days,weatherSuccess){
	
		Ext.data.JsonP.request({
           
            url: 'http://api.worldweatheronline.com/free/v1/weather.ashx',
            callbackKey: 'callback',
            params: {
                key: '579natwfurc74zqrt3qy6utp',
                q: city,
                format: 'json',
                num_of_days: days,
            },
			success : function(result) {
            	Ext.Viewport.setMasked(false);
				res=result;
				//alert("success")
				//var weatherRes = JSONP.parse(response.responseText);
				var weatherRes = result.data.weather;
				console.log(weatherRes);
				//setTimeout(function(){controller.weatherSuccess(weatherRes);
	
	//},5)
				controller.weatherSuccess(weatherRes);
				//var weatherRes = result.data;
				//console.log(weatherRes.weather);
				
				//var weatherdata_Store = Ext.getStore("weather_Store");
				//weatherdata_Store.setData(weatherRes);
				
				//var showWeatherForecast;
				//if(controller.getWeatherForecastPanel() === undefined){
					//showWeatherForecast = Ext.create('WeatherApp.view.weatherLScrn.WeatherForcastPanel');
				//Ext.Viewport.add(showWeatherForecast);
				//}else{
					//showWeatherForecast =controller.getWeatherForecastPanel();
				//}
				//Ext.Viewport.setActiveItem(showWeatherForecast);
			},
			failure : function(){
				Ext.Viewport.setMasked(false)
				alert("Did not Get Weather Updates From WorldWeather Server")
			}
		});
		
		
	
	}
	
	});