/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.toggleMark('bold')
}

export const input = (
  <value>
    <document>
      <paragraph>
        wo<anchor />rd
      </paragraph>
      <paragraph>
        an<focus />other
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        wo
        <b>
          <anchor />rd
        </b>
      </paragraph>
      <paragraph>
        <b>an</b>
        <focus />other
      </paragraph>
    </document>
  </value>
)
