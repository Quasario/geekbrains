

export const Message = ({ messages }) => (
    <div>
        {messages.map(({ text, author, id }) => (
            <div key={id}>
                {author}: {text}
            </div>
        ))}
    </div>
);