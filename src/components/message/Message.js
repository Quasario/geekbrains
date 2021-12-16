import './Message.css'

export const Message = (props) => {
    return (
        <h3 className="purple-text">{props.text}</h3>
    );
}