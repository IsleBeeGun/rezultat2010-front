const blockEditorContainerStyle = {
  backgroundColor: 'lightgray',
  border: '1px solid rgba(211, 211, 211, 0.5)',
  borderRadius: '10px',
  padding: '20px',
};

/* textblock */
wp.blocks.registerBlockType('rezultat2010/textblock', {
  title: 'Результат 2010 - Текст с заголовком',
  description: 'Обычный блок тескта с заголовком',
  icon: 'smiley',
  category: 'text',
  attributes: {
    title: { type: 'string' },
    text: { type: 'string' },
  },
  edit: function (props) {
    function updateTitle(event) {
      props.setAttributes({ title: event.target.value });
    }
    function updateText(event) {
      props.setAttributes({ text: event.target.value });
    }

    return wp.element.createElement(
      'div',
      {
        style: blockEditorContainerStyle,
      },
      wp.element.createElement(
        'h4',
        { style: { color: 'darkgray' } },
        `Результат 2010 - Текст с заголовком`
      ),
      wp.element.createElement('h3', null, 'Заголовок'),
      wp.element.createElement('input', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.title,
        onChange: updateTitle,
        placeholder: 'Укажите заголовок для текста',
      }),
      wp.element.createElement('h3', null, 'Текст'),
      wp.element.createElement('textarea', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.text,
        onChange: updateText,
        placeholder: 'Введите текст',
      })
    );
  },
  save: function (props) {
    return wp.element.createElement(
      'section',
      {
        className: 'r-section r-extra-margin-top-mobile r-pad-top-150'
      },
      wp.element.createElement(
        'div',
        {
          className: 'r-section__container',
        },
        wp.element.createElement(
          'h2',
          {
            className: 'r-section__title',
          },
          props.attributes.title
        ),
        wp.element.createElement('div', {
          className: 'r-section__line',
        }),
        wp.element.createElement(
          'div',
          {
            className: 'r-section__columns',
          },
          wp.element.createElement(
            'div',
            {
              className: 'r-section__text-block',
            },
            wp.element.createElement('p', null, props.attributes.text)
          )
        )
      )
    );
  },
});

/* list with image */
wp.blocks.registerBlockType('rezultat2010/textblock-with-image', {
  title: 'Результат 2010 - Список с одной картинкой',
  description: 'Список из пяти элементов с заголовком и картинкой справа',
  icon: 'smiley',
  category: 'text',
  attributes: {
    title: { type: 'string' },
    listItem1: { type: 'string' },
    listItem2: { type: 'string' },
    listItem3: { type: 'string' },
    listItem4: { type: 'string' },
    listItem5: { type: 'string' },
    imagePath: { type: 'string' },
  },
  edit: function (props) {
    function updateTitle(event) {
      props.setAttributes({ title: event.target.value });
    }
    function updateListItem(event, itemNumber) {
      props.setAttributes({ ['listItem' + itemNumber]: event.target.value });
    }
    function updateImagePath(event) {
      props.setAttributes({ imagePath: event.target.value });
    }
    return wp.element.createElement(
      'div',
      {
        style: blockEditorContainerStyle,
      },
      wp.element.createElement(
        'h4',
        { style: { color: 'darkgray' } },
        `Результат 2010 - Список с одной картинкой`
      ),
      wp.element.createElement('h3', null, 'Заголовок'),
      wp.element.createElement('input', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.title,
        onChange: updateTitle,
        placeholder: 'Укажите заголовок для текста',
      }),
      wp.element.createElement('h3', null, 'Первый пункт списка'),
      wp.element.createElement('textarea', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.listItem1,
        onChange: (e) => {
          updateListItem(e, 1);
        },
        placeholder: 'Введите текст',
      }),
      wp.element.createElement('h3', null, 'Второй пункт списка'),
      wp.element.createElement('textarea', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.listItem2,
        onChange: (e) => {
          updateListItem(e, 2);
        },
        placeholder: 'Введите текст',
      }),
      wp.element.createElement('h3', null, 'Третий пункт списка'),
      wp.element.createElement('textarea', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.listItem3,
        onChange: (e) => {
          updateListItem(e, 3);
        },
        placeholder: 'Введите текст',
      }),
      wp.element.createElement('h3', null, 'Четвёртый пункт списка'),
      wp.element.createElement('textarea', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.listItem4,
        onChange: (e) => {
          updateListItem(e, 4);
        },
        placeholder: 'Введите текст',
      }),
      wp.element.createElement('h3', null, 'Пятый пункт списка'),
      wp.element.createElement('textarea', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.listItem5,
        onChange: (e) => {
          updateListItem(e, 5);
        },
        placeholder: 'Введите текст',
      }),
      wp.element.createElement('h3', null, 'Путь к картинке'),
      wp.element.createElement('input', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.imagePath,
        onChange: updateImagePath,
        placeholder: 'Начиная с /wp-content/...',
      })
    );
  },
  save: function (props) {
    return wp.element.createElement(
      'section',
      {
        className: 'r-section',
      },
      wp.element.createElement(
        'div',
        {
          className: 'r-section__container',
        },
        wp.element.createElement(
          'h2',
          {
            className: 'r-section__title',
          },
          props.attributes.title
        ),
        wp.element.createElement('div', {
          className: 'r-section__line',
        }),
        wp.element.createElement(
          'div',
          {
            className: 'r-section__columns is-mobile',
          },
          wp.element.createElement(
            'div',
            {
              className: 'r-section__text-block',
            },
            wp.element.createElement(
              'ul',
              null,
              wp.element.createElement(
                'li',
                {
                  className: 'mark-li-1',
                },
                props.attributes.listItem1
              ),
              wp.element.createElement(
                'li',
                {
                  className: 'mark-li-2',
                },
                props.attributes.listItem2
              ),
              wp.element.createElement(
                'li',
                {
                  className: 'mark-li-3',
                },
                props.attributes.listItem4
              ),
              wp.element.createElement(
                'li',
                {
                  className: 'mark-li-4',
                },
                props.attributes.listItem4
              ),
              wp.element.createElement(
                'li',
                {
                  className: 'mark-li-5',
                },
                props.attributes.listItem5
              )
            )
          ),
          wp.element.createElement(
            'div',
            {
              className: 'r-section__images-container_single',
            },
            wp.element.createElement('div', {
              style: {backgroundImage: `url(${props.attributes.imagePath})`}
            })
          )
        )
      )
    );
  },
});

/* three images */
wp.blocks.registerBlockType('rezultat2010/three-images', {
  title: 'Результат 2010 - Три картинки в ряд',
  description: 'Три квадратных картинки в ряд',
  icon: 'smiley',
  category: 'text',
  attributes: {
    imagePath1: { type: 'string' },
    imagePath2: { type: 'string' },
    imagePath3: { type: 'string' },
  },
  edit: function (props) {
    function updateImagePath(event, itemNumber) {
      props.setAttributes({ ['imagePath' + itemNumber]: event.target.value });
    }
    return wp.element.createElement(
      'div',
      {
        style: blockEditorContainerStyle,
      },
      wp.element.createElement(
        'h4',
        { style: { color: 'darkgray' } },
        `Результат 2010 - Три картинки в ряд`
      ),
      wp.element.createElement('h3', null, 'Путь к первой картинке'),
      wp.element.createElement('input', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.imagePath1,
        onChange: (e) => {
          updateImagePath(e, 1);
        },
        placeholder: 'Начиная с /wp-content/...',
      }),
      wp.element.createElement('h3', null, 'Путь ко второй картинке'),
      wp.element.createElement('input', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.imagePath2,
        onChange: (e) => {
          updateImagePath(e, 2);
        },
        placeholder: 'Начиная с /wp-content/...',
      }),
      wp.element.createElement('h3', null, 'Путь к третей картинке'),
      wp.element.createElement('input', {
        type: 'text',
        style: { width: '100%' },
        value: props.attributes.imagePath3,
        onChange: (e) => {
          updateImagePath(e, 3);
        },
        placeholder: 'Начиная с /wp-content/...',
      })
    );
  },
  save: function (props) {
    return wp.element.createElement(
      'section',
      {
        className: 'r-section r-pad-top-260'
      },
      wp.element.createElement(
        'div',
        {
          className: 'r-section__container',
        },
        wp.element.createElement(
          'div',
          {
            className: 'r-section__columns is-centered is-mobile',
          },
          wp.element.createElement(
            'div',
            {
              className: 'r-section__step',
            },
            wp.element.createElement('img', {
              src: `${props.attributes.imagePath1}`,
              alt: 'Сборка серийных изделий',
            })
          ),
          wp.element.createElement(
            'div',
            {
              className: 'r-section__step',
            },
            wp.element.createElement('img', {
              src: `${props.attributes.imagePath2}`,
              alt: 'Упаковка промо наборов',
            })
          ),
          wp.element.createElement(
            'div',
            {
              className: 'r-section__step',
            },
            wp.element.createElement('img', {
              src: `${props.attributes.imagePath3}`,
              alt: 'Склейка деталей узлов',
            })
          )
        )
      )
    );
  },
});