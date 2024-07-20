function processItem(value, index, context) {
    console.log("Value:", value);
    console.log("Index:", index);
    console.log("Context:", context);
    // Further processing logic here
}

var walker = { value: 'some value' };
var thisp = { property: 'value' };

// Calling processItem with specified context and arguments
processItem.call(thisp, walker.value, 1, this);
