import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function ProjectInfo(props) {

    const [Project, setProject] = useState({})

    useEffect(() => {

        setProject(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Project Info">
                <Descriptions.Item label="Amount"> {Project.amount}</Descriptions.Item>
                <Descriptions.Item label="Completed">{Project.completed}</Descriptions.Item>
                <Descriptions.Item label="View"> {Project.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Project.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProjectInfo
