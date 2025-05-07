import { usePluginsStore } from './pluginsStore';
import TextEditor from './TableBody/Editors/TextEditor';
import LinkEditor from './TableBody/Editors/LinkEditor';
import TagEditor from './TableBody/Editors/TagEditor';
import TextRenderer from './TableBody/Renderers/TextRenderer';
import LinkRenderer from './TableBody/Renderers/LinkRenderer';
import TagRenderer from './TableBody/Renderers/TagRenderer';

export function initializePlugins() {
  const { 
    registerCellRenderer, 
    registerCellEditor 
  } = usePluginsStore.getState();
  
  // Register default renderers
  registerCellRenderer('text', TextRenderer);
  registerCellRenderer('link', LinkRenderer);
  registerCellRenderer('tag', TagRenderer);
  
  // Register default editors
  registerCellEditor('text', TextEditor);
  registerCellEditor('link', LinkEditor);
  registerCellEditor('tag', TagEditor);
}