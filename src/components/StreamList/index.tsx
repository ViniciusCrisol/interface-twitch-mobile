import React from 'react';
import { Text } from 'react-native';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StramThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamDescription,
  StreamCategory,
  StreamAvatar,
  StreamUsername,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StramThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>@rocketseat</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com NextJs, e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Sciency & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>Web Developement</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
