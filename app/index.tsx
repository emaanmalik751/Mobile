import { View } from 'react-native';
import Message from '../components/message';

export default function HomeScreen() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black'
    }}>
      <Message />
    </View>
  );
}
