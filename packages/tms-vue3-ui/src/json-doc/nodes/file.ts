import { h, VNode } from 'vue'
import { FieldNode } from './field-node'
import { components } from './index'

export class FileNode extends FieldNode {
  options(attrOrProps: any) {
    const options = {
      // ...attrOrProps,
      type: attrOrProps.type,
      name: this.field.name,
      class: ['tvu-jdoc__nest'],
    }

    return options
  }
  children(): VNode[] {
    const children = []

    children.push(
      h(
        components.button.tag,
        {
          props: {
            type: 'primary',
            size: 'small',
          },
        },
        '上传文件'
      )
    )

    return children
  }
}