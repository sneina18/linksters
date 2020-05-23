import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProjectImage from './Sections/ProjectImage';
import ProjectInfo from './Sections/ProjectInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
function DetailProjectPage(props) {
    const dispatch = useDispatch();
    const projectId = props.match.params.projectId
    const [Project, setProject] = useState([])

    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${projectId}&type=single`)
            .then(response => {
                setProject(response.data[0])
            })

    }, [])

    const addToCartHandler = (projectId) => {
        dispatch(addToCart(projectId))
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Project.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <ProjectImage detail={Project} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProjectInfo
                        addToCart={addToCartHandler}
                        detail={Project} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailProjectPage
