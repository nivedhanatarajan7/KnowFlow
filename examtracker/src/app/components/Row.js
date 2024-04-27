import "./Row.css"

const Row = ({item}) => {
    return (
        <div className="row">
            <label>{item.name}</label>
            <input 
            required type={item.type} 
            />
        </div>
    );
}

export default Row;