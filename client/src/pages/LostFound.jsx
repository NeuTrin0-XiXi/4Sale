import { connect } from 'react-redux'
import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { withRouter } from 'react-router'

function LostFound(props) {

    const { user } = props

    const array = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = e.target
        const newItem = new FormData(formData)

        newItem.append('userName', user.name);
        newItem.append('userEmail', user.email);
        newItem.append('userID', user._id);
    }

    return (
        <div className="my-4 container-lg">
            <Tabs
                defaultActiveKey="lost"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="lost" title="Lost">
                    <div className="container">
                        {
                            array.map((el, i) =>
                                <div className="jumburton row my-2 gap-3 gap-md-0" key={i} >
                                    <div className="col-12 col-md-3">
                                        <img src="/about-us3.jpg" alt="" style={{ height: '200px' }} />
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <h4>Heading</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi placeat illum molestiae hic qui rerum nam aperiam rem veniam, est fugit ea maxime fugiat quos iste culpa iusto dolor corporis cum. Voluptatibus animi iste eaque libero.</p>
                                        <p>date</p>
                                        <span>Found by xxxxx </span> {'  Email: '} <span>xxxxxxxxx@gmail.com</span>
                                    </div>
                                    <hr />
                                </div>

                            )
                        }
                    </div>

                </Tab>
                <Tab eventKey="found" title="Found">
                    found
                </Tab>
                <Tab eventKey="add" title="Add" >
                    <div className="d-flex flex-wrap justify-content-center">
                        <form className="needs-validation" id="itemForm" noValidate="" onSubmit={handleSubmit} >
                            <div className="row g-4">
                                <div className="col-12">
                                    <label htmlFor="productTitle" className="form-label">Title<span className='text-danger fw-bold'>*</span></label>
                                    <input autoCapitalize="sentences" required type="text" className="form-control custom-form" id="productTitle" placeholder="Enter Title" name="title" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="description" className="form-label">Description<span className='text-danger fw-bold'>*</span> </label>
                                    <div className="input-group has-validation">
                                        <textarea autoCapitalize="sentences" required className="form-control custom-form" id="description" placeholder="Enter Description" name="description" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center flex-column bd-highlight mb-3">

                                    <div className="col-12  d-flex justify-content-center flex-column bd-highlight mb-3">

                                        <label htmlFor='status' className="form-label">Status<span className='text-danger fw-bold'>*</span></label>

                                        <select class="form-select" aria-label="Default select example" name="status" id="status" required>
                                            <option value="">...</option>
                                            <option value="lost">Lost</option>
                                            <option value="found">Found</option>
                                        </select>
                                    </div>

                                    <div className="col-6 d-flex justify-content-center flex-column bd-highlight mb-4">
                                        <label htmlFor="date" className="form-label" required>Date of Lost/Found<span className='text-danger fw-bold'>*</span></label>
                                        <input required min="0" type="date" className="form-control" id="date" placeholder="Choose Date" name="date" />
                                    </div>

                                    <div className="col-12 col-md-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                        <label htmlFor="image1" className="form-label">Upload Image<span className='text-danger fw-bold'>*</span></label>
                                        <input required type="file" className="form-control" id="image1" placeholder="Required" name="file1" />
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />
                            <div className="d-flex flex-column bd-highlight mb-3 justify-content-evenly ">
                                <button className="w-100 btn btn-success btn-lg" type="submit">Post</button>
                            </div>
                            <button className="w-100 btn btn-danger btn-lg" style={{ textDecoration: 'none', color: 'white' }} type="reset">Cancel</button>
                        </form>
                    </div>
                </Tab>
            </Tabs>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        authorised: state.Authorised
    }
};

export default withRouter(connect(mapStateToProps)(LostFound));
