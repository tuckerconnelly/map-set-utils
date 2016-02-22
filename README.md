mapset-utils
===========

Utilities for Map and Set

## Functions

mapToObject - Converts a Map to an Object
```js
import { mapToObject } from 'mapset-utils'

const myMap = new Map

myMap.set('foo', 'bar')

const myObject = mapToObject(myMap)

myObject.foo // bar
```

objectToMap - Converts an Object to a Map
```js
import { objectToMap } from 'mapset-utils'

const myObject = { foo: 'bar' }

const myMap = objectToMap(myObject)

myMap.get('foo') // bar
```

## License
MIT
