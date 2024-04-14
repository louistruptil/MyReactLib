import './App.css';
import ImageSlider from './ImageSlider/Imageslider';

function App() {
    const  slides = [
        { url: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", title: "Animals" },
        { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg", title: "Tree" },
        { url: "https://media.istockphoto.com/id/1322220448/fr/photo/%C5%93il-futuriste-num%C3%A9rique-abstrait.jpg?s=612x612&w=0&k=20&c=b9EtQYg5c3_IDoPdqusxBaAD00AhH2ygsiRHZib7Xk8=", title: "eye" },
        { url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", title: "Japan" },
    ]

    return (
    <div className="App">
        <p>My first React app</p>
        <div className="containerStyles">
        <ImageSlider slides={slides} />
        </div>
    </div>
    );
}

export default App;
