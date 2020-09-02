import React from 'react';
import { View, FlatList } from 'react-native';

import Title from '../../components/Title';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';
import CategoryList from '../../components/CategoryList';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  isTitle?: boolean;
  render: () => JSX.Element;
}

const Following: React.FC = () => {
  const { data, indexes } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <StreamList />,
      },
      {
        key: 'CONTINUE_WAITCHING',
        render: () => <Title>Continue Wathing</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <StreamList />,
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offiline Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <ChannelList />,
      },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            refreshing={false}
            onRefresh={() => {}}
            stickyHeaderIndices={indexes}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => item.render()}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
