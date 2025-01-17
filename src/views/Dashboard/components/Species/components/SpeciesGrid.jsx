import { Col, Row } from "antd";
import { connect } from "react-redux";
import styles from "../Species.module.css";
import React from 'react'

function SpeciesGrid(props) {
    const { creatures, loading, setRecord } = props;
    return (
        <Row gutter={[16, 16]}>
            {!loading &&
                creatures.map((element, index) => (
                    <Col key={index} xs={8} sm={6} md={4} lg={3}>
                        <div
                            className={styles.speciesContainer}
                            onClick={() => setRecord(element)}
                        >
                            <img
                                src={`/assets/image/dive/${element.id}.webp`}
                                className={styles.speciesImages}
                                alt={`Photo of ${element.name}`}
                            />
                        </div>
                    </Col>
                ))}
        </Row>
    );
}

const mapStateToProps = (state) => {
    return {
        creatures: state.dive.creaturesData,
        loading: state.dive.loadingCreatures,
    };
};

export default connect(mapStateToProps, null)(SpeciesGrid);
