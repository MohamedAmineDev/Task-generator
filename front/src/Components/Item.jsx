function Item({ item, editButtonModalName }) {
    return (
        <>
            <tr>
                <th scope="row">{item.id}</th>
                <td> {item.title} </td>
                <td> {item.status} </td>
                <td>  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" readOnly value={item.description}></textarea> </td>
                <td>
                    <div className="row">
                        <div className="col-4">
                            <button type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target={`#${editButtonModalName}`}>Edit</button>
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