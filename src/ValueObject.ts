export abstract class ValueObject<T> {
  equals(vo: T) {
    if (vo === undefined || vo === null || !(vo instanceof ValueObject)) {
      return false
    }
    return JSON.stringify(vo) === JSON.stringify(this)
  }
}
