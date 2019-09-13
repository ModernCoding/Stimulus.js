import { Controller } from "stimulus"

// export default class extends Controller {
//   static targets = [ "toto" ]

//   greet() {
//     const element = this.totoTarget
//     const name = element.value
//     console.log(`Hello, ${name}!`)
//   }
// }

export default class extends Controller {
  static targets = [ "toto" ]

  greet() {
    console.log(`Hello, ${this.name}!`)
  }

  get name() {
    return this.totoTarget.value
  }
}