import {ImmutableList, Node, NullNode} from '../../../../client/js/utils/LinkedList'


describe('Node', () => {
  it('should have a head with the correct value', () => {
    const head = new Node(1, new Node(2, new Node(3, NullNode)));
    expect(head.getData()).to.equal(1);
  });
  it('should have the next node with the correct value', () => {
    const head = new Node(1, new Node(2, new Node(3, NullNode)));
    expect(head.getNext().getData()).to.equal(2);
  });
  it('should reduce to the correct value', () => {
    const head = new Node(1, new Node(2, new Node(3, NullNode)));
    const result = head.reduce((memo, value) => memo + value, 0);
    expect(result).to.equal(6);
  });
  describe('ImmutableList', () => {
    it('should ', () => {
      const list = new ImmutableList(1, 2, 3);
      const result = list.reduce((memo, value) => memo + value, 0);
      expect(result).to.equal(6);
    });
  });
});
