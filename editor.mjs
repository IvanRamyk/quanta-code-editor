import {EditorView, basicSetup} from "codemirror"
import {quanta} from "./dist/index.js"

let editor = new EditorView({
  extensions: [basicSetup, quanta()],
  parent: document.body
})
