export default function TodoItem({ index, item, handleClick }) {
    const handleItemClick = (e) => {
        e.preventDefault();
        console.log(e.target);
        handleClick(e.target.id);
      };
    return (
        <div>
           <h1  id={index} onClick={handleItemClick}> {item.completed ?
                <s id={index}>{item.title}</s> : <>{item.title}</>}
            </h1>
        </div>
    )
}