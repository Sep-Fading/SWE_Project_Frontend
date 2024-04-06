import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./RangeSlider.css";

interface RangeSliderProps {
  onFilterChange: (filters: Record<string, number[] | number>) => void;
  min: number;
  max: number;
  title: string;
}

const RangeSlider = ({ onFilterChange, min, max, title }: RangeSliderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<number | number[]>([min, max]);

  const onSliderChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length >= 2) {
      if (newValue[1] - newValue[0] < (2 * max) / 10) {
        // Prevent the range update if the interval is too small
        return;
      }
      setValue(newValue);
    }
  };

  return (
    <>
      <button
        className="flex justify-between items-center w-full border-b py-2 px-1 text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } flex flex-col gap-2 border-b py-2 mt-2 mx-2`}
      >
        <div className="mx-1">
          <Slider
            range
            min={min}
            max={max}
            value={value}
            onChange={onSliderChange}
            onChangeComplete={() => onFilterChange({ [title]: value })}
            allowCross={false}
          />
        </div>
        {Array.isArray(value) && value.length >= 2 ? (
          <div className="flex justify-between">
            <span>{value[0]}</span>
            <span>{value[1]}</span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default RangeSlider;
