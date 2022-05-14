import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import Button from 'flarum/components/Button';
import GenNewspaperModal from './components/GenNewspaperModal';

app.initializers.add('block-cat/newspaper-generator', () => {
  // Add a newspaper generator button in composer
  extend(TextEditor.prototype, 'toolbarItems', function(items) {
    items.add(
      'newspaper',
      Button.component({
        icon: 'far fa-newspaper',
        className: 'Button Button--icon',
        title: app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.newspaper_generator_title'),
        oncreate: (vnode) => $(vnode.dom).tooltip(),
        onclick: () => app.modal.show(GenNewspaperModal),
      }),
      300
    );
  });
});
