Ext.define('WeatherApp.view.weatherLScrn.WeatherSearchScreen',{
	extend: 'Ext.form.Panel',
	alias: 'widget.weatherSearchScreen',
	xtype: 'weatherSearchScreen',

	config: {
		baseCls:'wSearchCls',
		scrollable:false,
		   items: [ {
		           xtype:'toolbar',
		           title : 'Select City',
		           docked:'top',
		           items:[{
		        	   xtype : 'button',
		        	   text : 'Back',
		        	   iconCls:'arrow_left',
		        	   itemId : 'weatherSearchbckbutton', 
		        	   
		           },
		           
		           ] },
		           {
		        	   xtype: 'textfield',
		        	   placeHolder: 'City',
		        	   itemId: 'weatherCityTextField',
		        	   cls:'weatherCitytxtFldCls',
		           },
		           
		           {
		        	   xtype: 'button',
		        	   text: 'Forecast',
		        	   itemId:'weatherSearchbtn' ,
		        	   cls: 'weatherSearchbtnCls',
		        	          	   
		           },

		           
		          		           
				   ]

	
	} 

});