import React from "react";
import CommitmentItem from "./CommitmentItem"; // Importing the item component
import classes from "./Commitments.module.css";

const Commitments = () => {
    const commitments = [
        {
            id: 1,
            imgSrc: "CSR_Sustainable_Sourcing_v2.png",
            title: "Sustainable Sourcing & Traceability",
        },
        {
            id: 2,
            imgSrc: "CSR_Supporting_Actions_v2.png",
            title: "Charitable Initiatives",
        },
        {
            id: 3,
            imgSrc: "CSR_EcoDesign_v2.png",
            title: "Eco Design",
        },
        {
            id: 4,
            imgSrc: "CSR_Made_in_France_v2.png",
            title: "Made in France",
        },
    ];

    return (
        <div className={classes["commitments-container"]}>
            <h2>Our Commitments</h2>
            <div className={classes["commitments-flex"]}>
                {commitments.map((commitment) => (
                    <CommitmentItem
                        key={commitment.id}
                        commitment={commitment}
                    />
                ))}
            </div>
            <p className={classes["disclaimer"]}>
                *Excluding: ClarinsMen Foaming Shave Gel / myClarins Clear-out
                Targets Imperfections
            </p>
        </div>
    );
};

export default Commitments;
