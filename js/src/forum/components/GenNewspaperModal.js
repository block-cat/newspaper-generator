import Modal from "flarum/components/Modal";

export default class GenNewspaperModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
  }

  className() {
    return "GenNewspaperModal";
  }

  title() {
    return app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.newspaper_generator_title');
  }

  content() {
    return [
      m('.Modal-body',
        m('form.Form',
          {
            action: 'https://newspaper.jaguarpaw.co.uk/submit',
            enctype: 'multipart/form-data',
            method: 'POST',
            target: '_blank',
          },
          m('.Form-group',
            m('label', app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.newspaper_name')),
            m('input.FormControl',
              {
                placeholder: app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.newspaper_name'),
                type: 'text',
                name: 'papername',
              })
          ),
          m('.Form-group',
            m('label', app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.headline')),
            m('input.FormControl',
              {
                placeholder: app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.headline'),
                type: 'text',
                name: 'headline1',
              })
          ),
          m('.Form-group',
            m('label', app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.author')),
            m('input.FormControl',
              {
                placeholder: app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.author'),
                type: 'text',
                name: 'author1',
              })
          ),
          m('.Form-group',
            m('label', app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.picture')),
            m('input',
              {
                type: 'file',
                name: 'picture1',
              })
          ),
          m('.Form-group',
            m('label', app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.article_content')),
            m('textarea.FormControl',
              {
                name: 'paragraph1',
                rows: 5,
              }
            )
          ),
          m('.Form-group',
            m('button',
              {
                type: 'submit',
                className: 'Button Button--primary',
                onclick: () => app.modal.close(),
              },
              app.translator.trans('block-cat-newspaper-generator.forum.composer.newspaper_modal.submit_button'))
          ),
        )
      )
    ];
  }
}