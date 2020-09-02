import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const StreamContainer = styled.View`
  flex: 1;
  flex-direction: row;

  margin-right: 24px;
  margin-bottom: 24px;
`;

export const StramThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const StreamColumn = styled.View`
  flex: 1;
  margin-left: 11px;
`;

export const StreamRow = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamAvatar = styled.View`
  width: 20px;
  height: 20px;

  border-radius: 10px;
  background-color: ${colors.tag};
`;

export const StreamUsername = styled.Text`
  color: ${colors.black};
  font-family: roboto_700;

  margin-left: 5px;
`;

export const StreamDescription = styled.Text`
  color: ${colors.black};
`;

export const StreamCategory = styled.Text`
  color: ${colors.gray};
  font-family: roboto_500;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  padding: 2px 8px;
  margin-right: 5px;
  border-radius: 10px;
  background-color: ${colors.tag};
`;

export const TagText = styled.Text`
  font-size: 13px;
  color: ${colors.black};
  font-family: roboto_500;
`;
