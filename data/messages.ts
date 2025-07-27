export interface Message {
  id: string;
  user: string;
  lastMessage: string;
}

const messages: Message[] = [
  { id: '1', user: 'Alice', lastMessage: 'Hey there!' },
  { id: '2', user: 'Bob', lastMessage: 'How are you?' },
];

export default messages;