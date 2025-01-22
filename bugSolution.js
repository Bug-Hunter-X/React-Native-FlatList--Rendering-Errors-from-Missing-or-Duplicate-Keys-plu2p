The solution is to provide a unique `key` prop to each item in your `FlatList`'s `data` array. 

Here's corrected code:

```javascript
<FlatList
  data={[{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}]}
  keyExtractor={item => item.id}
  renderItem={({item}) => <Text>{item.name}</Text>}
/>
```

Using `keyExtractor` is the recommended approach. It provides a function that extracts the key from each item.  Alternatively, you could add the `key` directly to each item in your data array inside the `renderItem` prop: `key={item.id}`.  Always ensure keys are unique and stable.  If your data changes frequently, generating UUIDs for keys might be a good strategy.