class ValidationError extends Error {
  readonly element : string
  readonly expected : string
  constructor(msg: string, element: string, expected: string) {
    super()
    this.element = element
    this.expected = expected
    this.message = msg
    this.name = 'ValidationError'
  }
}

export default ValidationError
