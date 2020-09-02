import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 48px;
`;

export const ChannelContainer = styled.TouchableOpacity`
  padding-right: 14px;
  margin-bottom: 25px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  background-color: ${colors.tag};
`;

export const Column = styled.View`
  padding-left: 10px;
`;

export const Username = styled.Text`
  font-size: 16px;
  color: ${colors.black};
  font-family: roboto_500;
`;

export const Info = styled.Text`
  margin-top: 1px;
  font-size: 13px;
  color: ${colors.gray};
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  color: ${colors.black};
  width: 9px;
  height: 9px;

  border-radius: 4.5px;
  opacity: 0.85;
`;
