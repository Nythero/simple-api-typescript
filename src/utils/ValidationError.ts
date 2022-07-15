class ValidationError extends Error {
  readonly element : string
  readonly expected : string
  constructor(msg: string, element: string, expected: string) {
    super(msg)
    this.element = element
    this.expected = expected
  }
}

export default ValidationError
