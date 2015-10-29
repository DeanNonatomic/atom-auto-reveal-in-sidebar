## 0.1.0 - First Release
* Adds inital basic functionality to call 'tree-view:reveal-in-sidebar' whenever a file is opened

## 0.2.0 - Fixed focus issue
* Fixed small issue where the sidebar was being focused after opening a file. Focus will now return to whatever pane was active before reveal was called

## 0.3.0 - Replaced deprecated calls
* Replaced deprecated workspaceView calls
* Removed options for enable/disable as this seemed redundant

## 0.4.0 - Fixed desprecated warning in keymaps
* Cleared keymaps JSON file since there are no keymaps needed and this was throwing a deprecated warning

## 0.5.0 - Only auto-reveal when sidebar is open
* Merged in mattsawyer77's changes to only auto-reveal when the sidebar is open

## 0.6.0 - Reveal when switching to open tab
* Merged in kayone's changes to reveal when switching to an already open tab

## 0.7.0 - Updated description
* Updated the package description

## 0.8.0 - Prevent stealing tree-view focus
* Merged in kayone's changes to prevent accidentally stealing the focus from the tree-view
