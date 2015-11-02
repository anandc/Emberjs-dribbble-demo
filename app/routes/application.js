import Ember from 'ember';

export default Ember.Route.extend({
    actions: { /// defined action for user interaction, will be called from shots template
        search: function (val) {
            val = val || $('#new-todo').val();
            var users = this.store.peekAll('user'),//store.all is deprecated so use peekAll
                selectedUser;
            users.forEach(function (user) {
                if (user && user.get('name').toLowerCase() === val.toLowerCase()) {
                    selectedUser = user;
                    return false;
                }
            });
            if (selectedUser) {
                this.transitionTo('users.usershots', selectedUser);
            } else {
                $('#new-todo').addClass("error");
            }
        }
    }
});