Blogger.RecentCommentsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('comment');
	}
})