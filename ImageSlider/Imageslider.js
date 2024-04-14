import {useState} from "react";

const ImagesSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        transition: "background-image 0.5s ease-in-out",
    }
    const sliderStyles = {
        height: "100%",
        position: "relative",
    }
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "white",
        cursor: "pointer",
        zIndex: 1,
    }
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "white",
        cursor: "pointer",
        zIndex: 1,
    }
    const goToPrevious = () => {
        if (currentIndex === 0)
            setCurrentIndex(slides.length - 1);
        else
            setCurrentIndex(currentIndex - 1);
    }
    const goToNext = () => {
        if (currentIndex === slides.length - 1)
            setCurrentIndex(0);
        else
            setCurrentIndex(currentIndex + 1);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>←</div>
            <div style={rightArrowStyles} onClick={goToNext}>→</div>
            <div style={slideStyles}></div>
        </div>
)
    ;
}

export default ImagesSlider;