describe('test', () => {
  let classe = {},
    variable;

  beforeEach(() => {
    variable = 'ciao';
    classe = new Item(variable); 
  });

  it('first test', () => {
    expect(classe.getVariable()).toBe(variable);
  });

  it('first test', () => {
    expect(classe.render()).toBe('<div/>');
  });
});
