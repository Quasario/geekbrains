import { chatList } from './chatList';

export const Chats = () => (
    <div>
        {chatList.map(chat => (
            <div key={chat.id}>
                <a href='#'>{chat.name}</a>
            </div>
        ))}
    </div>
);