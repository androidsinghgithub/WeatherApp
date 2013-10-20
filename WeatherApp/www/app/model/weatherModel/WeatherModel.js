
Ext.define('WeatherApp.model.weatherModel.WeatherModel', {
    extend: 'Ext.data.Model',
    alias: 'widget.weatherModel',
    xtype: 'weatherModel',
   
    config: {
    	
        fields:['date','precipMM','tempMaxC','tempMaxF',
                'tempMinC','tempMinF','weatherDesc','weatherIconUrl','winddirection','windspeedKmph','windspeedMiles'],
    }
});

//WeatherModel.js