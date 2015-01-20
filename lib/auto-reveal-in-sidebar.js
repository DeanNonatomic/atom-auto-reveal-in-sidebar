module.exports = {

    config: {},

    observer: null,

    activate: function() {
        if (!this.observer) {
            this.observer = atom.workspace.onDidOpen(function(e) {
                var workspaceView = atom.views.getView(atom.workspace);
                var activePane = atom.workspace.getActivePane();
                atom.commands.dispatch(workspaceView, 'tree-view:reveal-active-file');
                if (activePane) {
                    activePane.activate();
                }
            });
        }
    },

    deactivate: function() {
        if (this.observer) {
            this.observer.dispose();
            this.observer = null;
        }
    }

};
