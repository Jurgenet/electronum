import marked from 'marked'

import './styles/github-dark.scss'

export default marked.setOptions({
  highlight: function(code, lang, callback) {
    require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function(err, result) {
      callback(err, result.toString())
    })
  }
})
