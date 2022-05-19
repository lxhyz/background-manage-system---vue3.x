export const steps = (i18n) =>  [
    {
        element: '#guide',
        popover: {
          className: 'first-step-popover-class',
          title: i18n('driver.guideBtn'),
          description: 'Body of the popover',
          position: 'left'
        }
      },
      {
        element: '#hamburger',
        popover: {
          className: 'first-step-popover-class',
          title: i18n('driver.hamburgerBtn'),
          description: 'Body of the popover',
          position: 'right'
        }
      },
      {
        element: '#lang',
        popover: {
          className: 'first-step-popover-class',
          title: i18n('driver.fullScreen'),
          description: 'Body of the popover',
          position: 'left'
        }
      },
]