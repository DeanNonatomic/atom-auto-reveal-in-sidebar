module.exports = {

    config: {
        autoEnable: {
            type: 'boolean',
            default: true
        }
    },

    observer: null,

    activate: function() {
        atom.workspaceView.command('auto-reveal-in-sidebar:enable', this.enable);
        atom.workspaceView.command('auto-reveal-in-sidebar:disable', this.disable);

        if (atom.config.get('auto-reveal-in-sidebar.autoEnable')) {
            this.enable();
        }
    },

    deactivate: function() {
        this.disable();
    },

    disable: function() {
        if (this.observer) {
            this.observer.dispose();
            this.observer = null;
        }
    },

    enable: function() {
        if (!this.observer) {
            this.observer = atom.workspace.onDidOpen(function(e) {
                var activePane = atom.workspace.getActivePane();
                atom.workspaceView.trigger('tree-view:reveal-active-file');
                if (activePane) {
                    activePane.activate();
                }
            });
        }
    }

};
