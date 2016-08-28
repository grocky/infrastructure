
const NullNode = {
  getData: () => { throw new Error('Accessing data on an empty list') },
  getNext: () => { throw new Error('Accessing next on an empty list') },
  isEmpty: () => true,
  map: function(fn: func) {
    return this;
  },
  reduce: (fn: func, memo) => memo,
  reduceRight: (fn: func, memo) => memo
};

export class Node {
  constructor(data = null, next: Node) {
    if (!data && !next) {
      return Node.NullNode;
    }

    this.data = data;
    this.next = next || Node.NullNode;

    if (!this.next instanceof Node && this.next !== Node.NullNode) {
      throw new Error('next must be an instance of Node');
    }
  }

  static NullNode = NullNode;

  getData() {
    return this.data;
  }

  getNext(): Node {
    return this.next;
  }

  isEmpty() {
    return false;
  }

  map(fn: func) {
    if (this.isEmpty()) {
    }
    const NodeBuilder = (memo, value) => new Node(fn(value), memo);
    return this.reduceRight(NodeBuilder, Node.NullNode);
  }

  reduce(fn: func, memo) {
    return this.isEmpty() ? memo : this.next.reduce(fn, fn(memo, this.data));
  }

  reduceRight(fn: func, memo) {
    return this.isEmpty() ? memo : fn(this.next.reduceRight(fn, memo), this.data);
  }

}

export class ImmutableList {
  constructor(...values) {
    if (values.length === 0) {
      this.head = Node.NullNode;
    } else {
      const data = values[0];
      const nextValues = [].slice.call(values, 1);

      this.head = new Node(data, new ImmutableList(...nextValues));
    }

    return this.head;
  }

  isEmpty() {
    return this.head.isEmpty();
  }

  map(fn: func) {
    return this.head.map(fn)
  }

  reduce(fn: func, memo) {
    return this.head.reduce(fn, memo);
  }

  reduceRight(fn: func, memo) {
    return this.head.reduceRight(fn, memo);
  }
}
