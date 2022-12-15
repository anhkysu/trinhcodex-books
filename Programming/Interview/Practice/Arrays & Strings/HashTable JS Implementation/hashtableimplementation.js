// In javascript, the most common example of hash table is the Object data type.
// However, the Object data type has 2 drawbacks:
// 1. It has properties added by the Object class
// 2. The size of the table is not tracked

// So, Map data type is a replacement for Object
// You will user set() and get() methods to store and retrieve data from the Map.

// Now we're going to implement another version of Hash Table by outselves.

class HashTableImplementation {
    #aha;
    constructor(){
        this.table = new Array(127);
        // All the key-value pairs will be saved inside this.table
        this.#aha = 15;
        this.size = 0 ;
    }

    _hash(key){
        // key as an input
        // expected output: index in the table array
        // simple implementation will be the ascii conversion
        let hash = 0;
        console.log(this.#aha);
        for(let i = 0 ; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value){
        let foundIndex = this._hash(key);
        this.table[foundIndex] = value;
        this.size++;
    }

    get(key, value){
        let foundIndex = this._hash(key);
        return this.table[foundIndex];
    }

    remove(key){
        let foundIndex = this._hash(key);
        this.table.splice(foundIndex, 1);
        this.size--;
    }
}


let sampleHashTableImple = new HashTableImplementation();
sampleHashTableImple.set("haha", "bbb");
sampleHashTableImple.set("hahg", "bbbasd");
sampleHashTableImple.set("hahasdasds", "bbbasd");
["haha","hahg","hahasdasds"].forEach(item => {
    console.log(sampleHashTableImple.get(item));
});
console.log(sampleHashTableImple.size);
sampleHashTableImple.remove("haha");
console.log(sampleHashTableImple.size);
console.log(sampleHashTableImple.aha);

// many keys can point to a single index (hash function returning same value for different hash code inputs) 
// => that's collision. 
// Linked list is usually used to resolve this issue.
