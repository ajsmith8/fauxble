Fauxble.Collections.PageMetrics = Backbone.Collection.extend({
	
	model: Fauxble.Models.PageMetric,
	url: 'page_metrics',
	
	initialize: function(models, options) {
		this.users = options.users;
		
		this.users.on('page', this.createPageMetric, this);
	},
	
	createPageMetric: function(options) {
		var user = options.user,
			page = options.page,
			time = options.time,
			metric;
			
		if (user) {
			if (this.where({page_name: page, user_id: user.get('id')})[0]) {
				metric = this.where({page_name: page, user_id: user.get('id')})[0];
				metric.set({
					time: metric.get('time') + time
				});
				metric.save();
			} else {
				metric = this.create({
					page_name: page,
					user_id: user.get('id'),
					user_name: user.get('name'),
					time: 0
				}, {
					success: function(model, response) {
						model.set({
							time: model.get('time') + time
						});
						model.save();
					},
					
					error: function() {
						
					}
				});
			}
		}
	}
});
