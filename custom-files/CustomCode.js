import {createContext} from 'react';
import { StreamChat } from 'stream-chat';

import { Streami18n,  } from 'stream-chat-expo';

const chatClient = StreamChat.getInstance('q95x9hkbyd6p');
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicm9uIn0.eRVjxLvd4aqCEHY_JRa97g6k7WpHEhxL7Z4K4yTot1c';
const user = {
  id: 'ron',
};

const filters = {
  example: 'example-apps',
  members: { $in: ['ron'] },
  type: 'messaging',
};
const sort = { last_message_at: -1 };
const options = {
  state: true,
  watch: true,
};
const AppContext = createContext();

const streami18n = new Streami18n({
  language: 'en',
});

export {
  streami18n,
  filters,
  sort,
  options,
  chatClient,
  user,
  userToken,
  AppContext,
};
