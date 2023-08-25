export default class ErrorRepository {
  static codes = new Map([
    [100, 'Error 100'],
    [200, 'Error 200'],
  ]);

  static translate(code) {
    if (this.codes.has(code)) {
      return this.codes.get(code);
    }
    return 'Unknown error';
  }
}
