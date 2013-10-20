Ext.define('WeatherApp.view.weatherLScrn.WeatherForecastListView',{
	extend: 'Ext.List',
	alias: 'widget.weatherForecastListView',
	xtype: 'weatherForecastListView',
	//fullscreen:true,
	config:{
		//height:'500px',
		cls: 'wList',
		//scrollable:false,
		//itemTpl: '<div class="weather">{date},{precipMM},{tempMaxC},{tempMaxF},{tempMinC},{tempMinF},{weatherIconUrl},{winddirection},{windspeedKmph},{windspeedMiles}</div>',
        itemTpl: ['<div class="mainDiv">'+
		'<div class="myImgDiv"><img class="myImgDiv_img" src={[this.test(values)]} ></div>'+
			'<div class="rightdiv">'+
			'<div class="dateDiv">Date : {date}</div>'+
			'<div class="weatherDescDiv">WeatherDesc : {[this.descrip(values)]}</div>'+
			'<div class="tempMaxCDiv">TempMaxC : {tempMaxC}</div>'+
			'<div class="tempMinCDiv">TempMinC : {tempMinC}</div>'+
			'<div class="tempMaxFDiv">TempMaxF : {tempMaxF}</div>'+
			'<div class="tempMinFDiv">TempMinF : {tempMinF}</div>'+
			'<div class="winddirectionDiv">Winddirection : {winddirection}</div>'+
			'<div class="windspeedKmphDiv">WindspeedKmph : {windspeedKmph}</div>'+
			'<div class="windspeedMilesDiv">windspeedMiles : {windspeedMiles}</div>'+
			'<div class="precipMMDiv">PrecipMM : {precipMM}</div>'+
			'</div>'+
			'</div>',{
        	
        	    test:function(data){
        	    	return data.weatherIconUrl[0].value;
        	    },
        
        },
        {
        	
    	    descrip:function(data){
    	    	return data.weatherDesc[0].value;
    	    },
    
    }
        ],
	store:'weather_Store',
		
	}

});