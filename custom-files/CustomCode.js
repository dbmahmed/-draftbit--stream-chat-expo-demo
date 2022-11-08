import { createContext } from "react";
// import { StreamChat } from "stream-chat";

import { Streami18n } from "stream-chat-expo";

// const chatClient = StreamChat.getInstance("q3gtgpbkjzk7");
// const userToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDIzNCJ9.kklZST8G0L2-vr9wMMuP03JYYui204BA1L8PKiWSxkQ";
// const user = {
//   id: "4234",
// };

const filters = {
  example: "example-apps",
  members: { $in: ["ron"] },
  type: "messaging",
};
const sort = { last_message_at: -1 };
const options = {
  state: true,
  watch: true,
};
const AppContext = createContext();

const streami18n = new Streami18n({
  language: "en",
});
export { streami18n, filters, sort, options, AppContext };
