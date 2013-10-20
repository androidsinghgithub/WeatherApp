Ext.define('WeatherApp.view.weatherLScrn.WeatherForcastPanel',{
	extend: 'Ext.Panel',
	alias: 'widget.weatherForecastPanel',
	xtype: 'weatherForecastPanel',
	config:{
		cls:'wPanel',
		fullscreen:true,
		scrollable:false,
	},
		
		
	
	initialize: function()
	{
		
		var forcastToolBar= {
		xtype:'toolbar',
		title : 'WeatherForcast',
		docked:'top',
		items:[{
			xtype : 'button',
			text : 'Back',
			iconCls:'arrow_left',
			itemId : 'weatherForcastbckbtn', 
		},
		{
			xtype:'spacer',
			width:'80%',
			id:'mySpacer',
		
		},
		{
			xtype : 'button',
			text : 'Home',
			iconCls:'home',
			itemId : 'weatherForcastHomebtn', 
			cls: 'weatherForcastHmbtnCls'
		}
			
		]
		};// End of tooBar
		
		
			
		
		//itemtpl= '<div class="contact">{name} {departmentID} {phoneNumber} </div>';
	
		//var departmentListViewDisplayed = Ext.create('WeatherApp.view.weatherLScrn.WeatherForecastListView');
		
		
		

		//var forcastOkButton= {
			
			//	xtype: 'button',
			//  text: 'ok',
			//  itemId: 'forcastOkBtn',
			//	cls:'forcastOkBtnCls',,forcastOkButton
		//};
		
		var wListView={
				xtype:'weatherForecastListView',
				height:'800px'
		};
		
		this.add([forcastToolBar,wListView]);
	}
	
	
}); //define
