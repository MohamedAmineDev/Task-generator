function Panel() {
    return (
        <>
            <div class="card">
                <div class="card-header fs-3">
                    Tasks
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Mark</td>
                                <td>
                                <button type="button" class="btn btn-primary btn-sm">Info</button>
                                <button type="button" class="btn btn-danger btn-sm">Delete</button>
                                <button type="button" class="btn btn-success btn-sm">Start</button>
                                <button type="button" class="btn btn-secondary btn-sm">Finish</button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Panel;