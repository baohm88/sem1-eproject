import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import classes from "./SortAndFilter.module.css";
import { formatter } from "../../util/formatter";

const SortAndFilter = ({
    sortOption,
    setSortOption,
    priceRange,
    setPriceRange,
    maxPrice = 500,
}) => {
    const [sliderIsVisible, setSliderIsVisible] = useState(false);
    const [selectedRange, setSelectedRange] = useState(false);

    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
        setSelectedRange(true);
    };

    return (
        <div className={classes.filters}>
            {/* Sort Options */}
            <div className={classes["sort-options"]}>
                <label htmlFor="sort">
                    <strong>Sort by: </strong>
                </label>
                <select
                    className={classes.select}
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="" disabled>
                        Select
                    </option>
                    <option value="name_asc">Name (A-Z)</option>
                    <option value="name_desc">Name (Z-A)</option>
                    <option value="price_asc">Price (Low to High)</option>
                    <option value="price_desc">Price (High to Low)</option>
                </select>
            </div>

            {/* Price Range Filter */}
            <div>
                <h4
                    onClick={() => setSliderIsVisible((prev) => !prev)}
                    className={classes["filter-options"]}
                >
                    Price {sliderIsVisible ? <FaCaretUp /> : <FaCaretDown />}
                </h4>
                {sliderIsVisible && (
                    <Slider
                        range
                        min={0}
                        max={maxPrice} // Set to the actual maximum price if needed
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        step={5}
                    />
                )}
                {selectedRange && (
                    <p className={classes.selectedRange}>
                        <span
                            onClick={() => {
                                setPriceRange([0, maxPrice]); // Reset to default
                                setSelectedRange(false);
                            }}
                        >
                            X&nbsp;
                        </span>
                        {formatter.format(priceRange[0])} -{" "}
                        {formatter.format(priceRange[1])}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SortAndFilter;
