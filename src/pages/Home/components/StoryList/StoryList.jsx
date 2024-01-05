import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const StoryList = () => {
  const storyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5];
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.addEventListener("scroll", () => {
      setScrollPosition(containerRef.current.scrollY);
    });
  }, []);

  const handleScroll = (scrollAmount) => {
    // Calculate the new scroll position
    const newScrollPosition = scrollPosition + scrollAmount;

    // Update the state with the new scroll position
    // setScrollPosition(newScrollPosition);

    // Access the container element and set its scrollLeft property
    containerRef.current.scrollRight = newScrollPosition;
  };

  return (
    <div className="story-list-container">
      <div className="story-list-wrapper" ref={containerRef}>
        {storyData.map((item) => {
          return (
            <div className="story-single">
              <div className="story-avatar"></div>
              <div>name</div>
            </div>
          );
        })}
      </div>
      {/* <button onClick={() => handleScroll(100)}>move</button> */}
    </div>
  );
};

export default StoryList;
