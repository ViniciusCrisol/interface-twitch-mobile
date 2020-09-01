import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

import colors from '../../styles/colors';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  padding-top: ${statusBarHeight}px;
  background: ${colors.primary};

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding-left: 14px;
`;

export const Main = styled.View``;
