雙連照護
============

### Install

1. install 'node.js'
2. 'install -g gulp & -g bower'
3. npm install
4. open fire.app(1.4) watch './templates/project/source'


### Directory Layout

.
└── templates/
  └── project/                      # 
    └── source/                     # 
      ├── fonts/                    # font
      ├── vendor/                   # 第三方資源
      │ └── jquery/                 # jquery
      │   ├── jquery.js             # 
      │   ├── jquery.min.js         # 
      │   └── jquery.min.map        # 
      ├── sass/                     # SASS
      │ ├── all.scss                # 集合全部樣式
      │ ├── page/                   # page style
      │ ├── vendor/                 # bascic style
      │ │ └── bootstrap-sass/       # vendor bootstrap-sass
      │ │   ├── bootstrap/          # bootstrap-sass folder
      │ │   └── _bootstrap.scss     # bootstrap.scss
      │ ├── basic/                  # bascic style
      │ │ ├── folder/               #
      │ │ └── folder/               #
      │ ├── _colors.scss            # variable
      │ ├── _layouts.scss           # variable
      │ ├── _normalize/             # variable
      │ ├── _pages/                 # 
      │ └── _typography.js          # variable
      ├── page-name/                # 頁面樣板
      │ └── //                      # 
      │── index.html.slim           # 專案首頁
      │── config.rb                 # Fire.app  config
      │── data.yml                  # metadata partial
      └── view_helpers.rb           # RB helper
