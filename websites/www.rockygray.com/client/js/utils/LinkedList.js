
export class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  getData() {
    return this.data;
  }

  getNext(): Node {
    return this.next;
  }

  isEmpty = false;

  map(fn: func) {
    const NodeBuilder = (memo, value) => new Node(fn(value), memo);
    return this.reduceRight(NodeBuilder, NullNode);
  }

  reduce(fn: func, memo) {
    return this.next.reduce(fn, fn(memo, this.data))
  }

  reduceRight(fn: func, memo) {
    return fn(this.next.reduceRight(fn, memo), this.data);
  }

}

export class ImmutableList {
  constructor(...values) {
    if (values.length === 0) {
      return NullNode;
    }

    const data = values[0];
    const nextValues = [].slice.call(values, 1);

    this.head = new Node(data, new ImmutableList(...nextValues));

    return this.head;
  }

  isEmpty() {
    return this.head.isEmpty;
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

export const NullNode = {
  isEmpty: true,
  get data() {
    throw new Error('Accessing data on an empty list')
  },
  get next() {
    throw new Error('Accessing next on an empty list')
  },
  map: function() { return this; },
  reduce: (fn, memo) => memo,
  reduceRight: (fn, memo) => memo
};

// export class CircularLinkedList {
//   constructor(root: Node) {
//     this.head = root;
//     this.tail = root;
//     this.tail.setNext(null);
//
//     this.iterator = this.head;
//     this.iteratorPosition = root ? 1 : 0;
//
//     this.size = root ? 1 : 0;
//   }
//
//   static of(values: Array, position: number = 1) {
//     let nodes = values.map(Node.of);
//     const list = new CircularLinkedList(nodes.shift());
//     nodes.forEach(list.push);
//     list.setPosition(position);
//
//     return list;
//   }
//
//   static clone(list: CircularLinkedList) {
//
//   }
//
//   first() {
//     return this.head.getData();
//   }
//
//   last() {
//     return this.tail.getData();
//   }
//
//   push(node: Node) {
//     this.tail.setNext(node);
//     this.tail = node;
//     this.tail.setNext(this.head);
//
//     this.size++;
//   }
//
//   current() {
//     return this.iterator.getData();
//   }
//
//   position() {
//     return this.iteratorPosition;
//   }
//
//   setPosition(position) {
//     for (const i = 0; i < position; i++) {
//       this.next();
//     }
//   }
//
//   next() {
//     this.iterator = this.iterator.getNext();
//     this.iteratorPosition++;
//     return this.iterator.getData();
//   }
//
//   count() {
//     return this.size;
//   }
// }
