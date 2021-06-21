import React from "react";

import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";

function App() {
  return (
    <div className="App">
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        data={{
          time: 1556098174501,
          blocks: [
            {
              type: "paragraph",
              data: {
                text:
                  "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
              }
            },
          ],
          version: "2.12.4"
        }}
      />
    </div>
  );
}

export default App;
