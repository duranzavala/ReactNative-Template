import React, { useState } from 'react';

import {
    Pressable,
    Text,
    TextInput,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { actionSignIn } from '@Redux/Actions/AuthActions';
import { RootStore } from '@Redux/Store/Store';

interface StateProps {
  name: string;
  address: string;
}

const App: React.FC<StateProps> = (props) => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const auth = useSelector((store: RootStore) => store.authReducer);

  const handleOnChangeText = (text: string) => {
    setUser(text);
  };

  const handleOnPress = () => {
    dispatch(actionSignIn(user, '12345'));
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red', justifyContent: 'space-around', alignItems: 'center' }}>
      <TextInput
        onSubmitEditing={handleOnPress}
        onChangeText={handleOnChangeText}
        placeholder={'Search your github user information'}
        style={{ width: 300, height: 40, backgroundColor: 'white' }}
      />
      <Pressable
        onPress={handleOnPress} 
        style={{
          backgroundColor: 'green',
          borderRadius: 20,
          height: 25,
          justifyContent: 'center',
          paddingHorizontal: 10,
          width: 200,
          alignItems: 'center',
        }}
      >
        <Text>Get github user information</Text>
      </Pressable>
      <View style={{ flexDirection: 'column' }}>
        <Text style={{ alignSelf: 'center' }}>User information retrieved:</Text>
        <Text>{auth.name}</Text>
        <Text>{auth.userId}</Text>
        <Text>{auth.avatar}</Text>
        <Text>{auth.repo}</Text>
      </View>
    </View>
  );
};

export default App;
