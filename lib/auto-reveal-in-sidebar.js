'use strict';

function isTreeViewOpen() {
    var panelView, treeView, treeViewPkg;
    if (!(atom.packages.isPackageLoaded('tree-view') && atom.packages.isPackageActive('tree-view'))) {
        return false;
    }
    treeViewPkg = atom.packages.getActivePackage('tree-view');
    treeView = treeViewPkg.mainModule.treeView;
    if (!(treeView && treeView.panel)) {
        return false;
    }
    panelView = atom.views.getView(treeView.panel);
    if (panelView.parentNode == null) {
        return false;
    }
    return true;
}

module.exports = {

    config: {},

    observer: null,

    activate: function() {
        if (!this.observer) {
            this.observer = atom.workspace.onDidOpen(function(e) {
                var workspaceView, activePane;

                if(isTreeViewOpen()) {
                    workspaceView = atom.views.getView(atom.workspace);
                    activePane = atom.workspace.getActivePane();
                    atom.commands.dispatch(workspaceView, 'tree-view:reveal-active-file');
                    if (activePane) {
                        activePane.activate();
                    }
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
