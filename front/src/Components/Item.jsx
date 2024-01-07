function Item({ item, editButtonModalName, index, handleTaskSelection }) {
    return (
        <>
            <tr>
                <th scope="row">{index+1}</th>
                <td> {item.title} </td>
                <td> {item.status} </td>
                <td>  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" readOnly value={item.description}></textarea> </td>
                <td>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#${editButtonModalName}`} onClick={(e) => {
                                e.preventDefault();
                                handleTaskSelection(index);
                                console.log(index);
                            }}>Edit</button>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>




                </td>
            </tr>
        </>
    );
}
export default Item;