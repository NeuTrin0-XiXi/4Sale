import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { withRouter } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify';

function LostFound(props) {

    const { user } = props;

    const [lost, setLost] = useState([]);
    const [found, setFound] = useState([]);

    useEffect(() => {
        axios.get('/api/lost-found/')
            .then(res => {
                setLost([
                    ...res.data.filter(item => { return item.status === 'lost' })
                ]);

                setFound([
                    ...res.data.filter(item => { return item.status === 'found' })
                ]);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = e.target
        const newItem = new FormData(formData)

        newItem.append('userName', user.name);
        newItem.append('userEmail', user.email);

        axios.post('/api/lost-found', newItem)
            .then(res => {
                toast.success(`Posted Ad for ${res.data.title}`);
            })
            .catch(err => {
                console.log(err);
                toast.error("Failed to post");
            })
    };

    function Data(props) {
        return (
            <div className="container">
                {
                    props.status.map((item) =>
                        <div className="jumburton row my-2 gap-3 gap-md-0" key={item._id} >
                            <div className="col-12 col-md-3">
                                {
                                    item.images ? <img src={item.images.url} alt="Item found" style={{ height: '200px' }} />
                                        : <div>Some fancy graphic if the lost item's pic is unavailable</div>
                                }
                            </div>
                            <div className="col-12 col-md-9">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <p>{item.date}</p>
                                <span>Found by {item.userName} </span> {'  Email: '} <span>{item.userEmail}</span>
                            </div>
                            <hr />
                        </div>
                    )
                }
            </div>
        )
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
                    <Data status={lost} />
                </Tab>
                <Tab eventKey="found" title="Found">
                    <Data status={found} />
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

                                        <label htmlFor='status' className="form-label">I ___ this <span className='text-danger fw-bold'>*</span></label>

                                        <select className="form-select" aria-label="Default select example" name="status" id="status" required>
                                            <option value="">...</option>
                                            <option value="lost">lost</option>
                                            <option value="found">found</option>
                                        </select>
                                    </div>

                                    <div className="col-6 d-flex justify-content-center flex-column bd-highlight mb-4">
                                        <label htmlFor="date" className="form-label" required>Date of Lost/Found<span className='text-danger fw-bold'>*</span></label>
                                        <input required min="0" type="date" className="form-control" id="date" placeholder="Choose Date" name="date" />
                                    </div>

                                    <div className="col-12 col-md-6 d-flex justify-content-center flex-column bd-highlight mb-3">
                                        <label htmlFor="image1" className="form-label">Upload Image</label>
                                        <input type="file" className="form-control" id="image1" placeholder="Required" name="file1" />
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
