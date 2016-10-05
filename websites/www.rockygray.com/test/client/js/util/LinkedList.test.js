import {ImmutableList, Node} from '../../../../client/js/utils/LinkedList'

const double = (value) => value * 2;
const add = (a, b) => a + b;
const addObj = (a, value) => {
  if (!a.sum) a.sum = 0;
  a.sum += value;
  return a;
};

describe('LinkedList', () => {
  const initValue = 0;

  describe('NullNode', () => {
    it('should be empty', () => {
      expect(Node.NullNode.isEmpty()).to.equal(true);
    });
    it('should throw an Error on getData', () => {
      expect(() => Node.NullNode.getData()).to.throw('Accessing data on an empty list');
    });
    it('should throw an Error on getNext', () => {
      expect(() => Node.NullNode.getNext()).to.throw('Accessing next on an empty list');
    });
    it('should return itself when map is called', () => {
      expect(Node.NullNode.map(double)).to.equal(Node.NullNode);
    });
    it('should return initial value on reduce', () => {
      const initObj = {};
      expect(Node.NullNode.reduce(add, initValue)).to.equal(initValue);
      expect(Node.NullNode.reduce(addObj, initObj)).to.equal(initObj);
    });
    it('should return initial value on reduceRight', () => {
      const initObj = {};
      expect(Node.NullNode.reduceRight(add, initValue)).to.equal(initValue);
      expect(Node.NullNode.reduceRight(add, initObj)).to.equal(initObj);
    });
  });
  describe('Node', () => {
    it('should be empty when no data and no next' , () => {
      const node1 = new Node(null, null);
      const node2 = new Node();
      expect(node1.isEmpty()).to.equal(true);
      expect(node2.isEmpty()).to.equal(true);
    });
    it('should not be empty when there is data' , () => {
      const node1 = new Node(1, null);
      const node2 = new Node(1);
      expect(node1.isEmpty()).to.equal(false);
      expect(node2.isEmpty()).to.equal(false);
    });
    it('should not be empty when there is a next node' , () => {
      const node2 = new Node(null, Node.NullNode);
      expect(node2.isEmpty()).to.equal(false);
    });
    it('should have a head with the correct value', () => {
      const head = new Node(1, new Node(2, new Node(3)));
      expect(head.getData()).to.equal(1);
    });
    it('should have the next node with the correct value', () => {
      const head = new Node(1, new Node(2, new Node(3, Node.NullNode)));
      expect(head.getNext().getData()).to.equal(2);
    });
    it('should reduce to the correct value', () => {
      const head = new Node(1, new Node(2, new Node(3, Node.NullNode)));
      const result = head.reduce(add, initValue);
      expect(result).to.equal(6);
      const resultObj = head.reduce(addObj, {});
      expect(resultObj).to.eql({sum: 6});
    });
    it('should reduceRight to the correct value', () => {
      const head = new Node(1, new Node(2, new Node(3, Node.NullNode)));
      const result = head.reduceRight(add, initValue);
      expect(result).to.equal(6);
      const resultObj = head.reduceRight(addObj, {});
      expect(resultObj).to.eql({sum: 6});
    });
    it('should map nodes', () => {
      const head = new Node(1, new Node(2, new Node(3, Node.NullNode)));
      const newList = head.map(double);
      const result = newList.reduce(add, 0);
      expect(result).to.equal(12);
    });
  });
  describe('ImmutableList', () => {
    it('should return a NulllNode if not constructed with any values', () => {
      const list = new ImmutableList();
      expect(list).to.equal(Node.NullNode);
    });
    it('should reduce to a value', () => {
      const list = new ImmutableList(1, 2, 3);
      const result = list.reduce(add, 0);
      expect(result).to.equal(6);
    });
    it('should reduceRight', () => {
      const list = new ImmutableList(1, 2, 3);
      const result = list.reduceRight(add, 0);
      expect(result).to.equal(6);
    });
    it('should map nodes', () => {
      const list = new ImmutableList(1, 2, 3);
      const newList = list.map(double);
      const result = newList.reduce(add, 0);
      expect(result).to.equal(12);
    });
  });
});
