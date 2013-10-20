Ext.define('WeatherApp.store.weatherStore.WeatherStore' ,{
   extend:'Ext.data.Store',
   alias: 'widget.weatherStore',
   config:{
   storeId:'weather_Store',
   
   model: 'WeatherApp.model.weatherModel.WeatherModel', 
	
	 
     autoLoad: true,
     

   
   }
   });