// Message.ts
export interface Message {
    id: number;
    type: 'text' | 'image';
    sender: 'user' | 'agent';
    content: string;
  }
  