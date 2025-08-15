// components/Message.tsx
import { Text, View } from 'react-native';

export default function Message() {
  return (
    <View style={{ backgroundColor: 'black', padding: 20, borderRadius: 8,}}>
      <Text style={{ fontSize: 24, color: 'blue' }}>Hello World</Text>
    </View>
  );
}
