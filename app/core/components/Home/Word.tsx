import randomWords from "random-words"

export class Word {
  content: string
  top: string
  left: string
  size: string
  id: string

  private randomPercent() {
    return Math.floor(Math.random() * 100) + "%"
  }

  private randomFontSize() {
    const sizes = ["xs", "base", "lg", "2xl", "4xl", "6xl"]
    return sizes[Math.floor(Math.random() * sizes.length)]
  }

  constructor() {
    this.content = randomWords()
    this.top = this.randomPercent()
    this.size = this.randomFontSize()
    this.left = this.randomPercent()
    this.id = this.left + this.top + this.content
  }
}
